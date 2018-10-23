<template>
  <div class="kindly-select">
    <button
      ref="button"
      :aria-expanded="expanded"
      type="button"
      class="kindly-select-button"
      role="button"
      aria-haspopup="listbox"
      @click="handleClick"
      v-text="buttonText"
    />
    <select
      :name="name"
      v-model="selected"
      :aria-hidden="!isSp"
      class="kindly-select-el"
      aria-haspopup="listbox"
      @change="handleChange"
    >
      <option
        v-for="(option, i) in options"
        :value="option.value"
        :key="i"
        v-text="option.text"
      />
    </select>
    <ul
      ref="list"
      :aria-activedescendant="activedescendant"
      :aria-hidden="hidden"
      class="kindly-select-list"
      role="listbox"
      tabindex="-1"
    >
      <slot />
    </ul>
  </div>
</template>

<script>
import * as util from '../helpers/util';

export default {
  props: {
    name: {
      type: String,
      default: ''
    }
  },

  data() {
    return {
      options: [],
      buttonText: null,
      selected: null,
      expanded: false,
      isSp: util.isSp,
      activedescendant: null,
      hidden: 'true'
    };
  },

  created() {
    this.options = this.$children;

    this.$on('clickList', data => {
      this.buttonText = data.text;
      this.selected = data.value;
      this.activedescendant = data.computedId;

      [...this.options].forEach(option => {
        option.selected = option.value === data.value;
      });

      this.hideList();
    });

    document.body.addEventListener('click', this.handleClickBody, false);
  },

  destroyed() {
    document.body.removeEventListener('click', this.handleClickBody, false);
  },

  methods: {
    handleChange(e) {
      this.buttonText =
        e.target.options[e.target.options.selectedIndex].textContent;
    },
    handleClick() {
      this.toggleList();
    },
    handleClickBody(e) {
      const parentsNodes = util.getParents(e.target);

      if (
        !parentsNodes.includes(this.$refs.list) &&
        !parentsNodes.includes(this.$refs.button) &&
        e.target !== this.$refs.list &&
        e.target !== this.$refs.button
      ) {
        this.hideList();
      }
    },
    toggleList() {
      this.hidden === 'true' ? this.showList() : this.hideList();
    },
    showList() {
      this.expanded = true;
      this.hidden = 'false';
    },
    hideList() {
      this.expanded = false;
      this.hidden = 'true';
    }
  }
};
</script>
