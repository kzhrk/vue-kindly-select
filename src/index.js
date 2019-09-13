import VueFunctionApi from 'vue-function-api';
import Select from './components/Select';
import Option from './components/Option';

export default {
  install(Vue) {
    Vue.use(VueFunctionApi);
    Vue.component('kindly-select', Select);
    Vue.component('kindly-option', Option);
  }
};

export { Select, Option };
