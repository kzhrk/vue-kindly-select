import Select from './components/Select';
import Option from './components/Option';

export default {
  install(Vue) {
    Vue.component('kindly-select', Select);
    Vue.component('kindly-option', Option);
  }
};

export { Select, Option };
