<template>
  <li
    :id="computedId"
    :class="{ 'is-selected': selected }"
    class="kindly-option"
    role="option"
    @click="handleClick"
  >
    <slot />
  </li>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    }
  },

  data() {
    return {
      selected: false
    };
  },

  computed: {
    computedId() {
      return `${this.$parent.name}--${this.value}`;
    }
  },

  methods: {
    handleClick() {
      this.$parent.$emit('clickList', {
        value: this.value,
        text: this.text,
        computedId: this.computedId
      });
    }
  }
};
</script>
