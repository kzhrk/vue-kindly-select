import path from 'path';
import { configure } from '@storybook/vue';

import Vue from 'vue';

import {Select, Option} from '../src';

Vue.component('kindly-select', Select);
Vue.component('kindly-option', Option);

function loadStories () {
  require('../stories');
}

configure(loadStories, module);
