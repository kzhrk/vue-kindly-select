import { storiesOf } from '@storybook/vue';

import { Select, Option } from '../src';
import '../docs/css/style.css';

storiesOf('KindlySelect', module)
  .add('default', () => ({
    components: { Select, Option },
    template: `<kindly-select name="select1">
      <kindly-option text="UK" value="1">
        <i>🇬🇧</i>United Kingdom
      </kindly-option>
      <kindly-option text="USA" value="2">
        <i>🇺🇸</i>United States of America
      </kindly-option>
      <kindly-option text="PRC" value="3">
        <i>🇨🇳</i>People's Republic of China
      </kindly-option>
    </kindly-select>`,
  }));