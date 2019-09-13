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
import {createComponent, onDestroyed, ref, value, computed, watch, reactive, onMounted, onUnmounted} from 'vue-function-api'

export default createComponent({
  props: {
    name: {
      type: String,
      default: ''
    }
  },
  setup(props, context) {
    const state = reactive({
      options: [],
      buttonText: null,
      selected: null,
      expanded: false,
      isSp: util.isSp,
      activedescendant: null,
      hidden: 'true'
    })

    function handleChange(e) {
      state.buttonText =
        e.target.options[e.target.options.selectedIndex].textContent;
    }

    function handleClick() {
      toggleList();
    }

    function handleClickBody(e) {
      const parentsNodes = util.getParents(e.target);

      if (
        !parentsNodes.includes(context.refs.button) &&
        !parentsNodes.includes(context.refs.list) &&
        e.target !== context.refs.button &&
        e.target !== context.refs.list
      ) {
        hideList();
      }
    }

    function toggleList() {
      state.hidden === 'true' ? showList() : hideList();
    }

    function showList() {
      state.expanded = true;
      state.hidden = 'false';
    }

    function hideList() {
      state.expanded = false;
      state.hidden = 'true';
    }

    onMounted(() => {
      state.options = context.children;

      context.on('clickList', data => {
        context.buttonText = data.text;
        context.selected = data.value;
        context.activedescendant = data.computedId;

        [...context.options].forEach(option => {
          option.selected = option.value === data.value;
        });

        hideList();
      });

      document.body.addEventListener('click', handleClickBody, false);
    })

    onDestroyed(() => {
      document.body.removeEventListener('click', handleClickBody, false);
    })

    return {
      state,
      handleChange,
      handleClick,
      handleClickBody,
      toggleList,
      showList,
      hideList
    }
  }
});
</script>
