import Vue from 'vue';
import { Select, Option } from '../../src';

new Vue({
  components: {
    'kindly-select': Select,
    'kindly-option': Option
  },

  el: '#app'
});
