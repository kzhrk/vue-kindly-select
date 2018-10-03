# A vue component to render accessible select

This package contains a Vue component to render accesible select.

[Demo](https://kzhrk.github.com/vue-kindly-select/)

## Install

```
yarn add vue-tabs-component
```

or

```
npm install vue-tabs-component -d
```

## Usage

The recommend use case is to register the components globaly.

```js
import Vue from 'vue';
import {Select, Option} from 'vue-kindly-select';

Vue.component('kindly-select', Select);
Vue.component('kindly-option', Option);
```

Alternatively, you can register the components with default components name, `kindly-select` and `kindly-option`.

```js
import Vue from 'vue';
import KindlySelect from 'vue-kindly-select';

Vue.use(KindlySelect);
```

You can use html tags like this to render the components.

```html
<div>
  <kindly-select name="select1">
    <kindly-option text="UK" value="1">
      <i>🇬🇧</i>United Kingdom
    </kindly-option>
    <kindly-option text="USA" value="2">
      <i>🇺🇸</i>United States of America
    </kindly-option>
    <kindly-option text="PRC" value="3">
      <i>🇨🇳</i>People's Republic of China
    </kindly-option>
  </kindly-select>
</div>
```

## Licence

MIT

## Author

kzhrk <info@kzhrk.com>
