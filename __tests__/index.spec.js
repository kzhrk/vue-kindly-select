import KindlySelect from '../src';
import Vue from 'vue/dist/vue';

describe(`vue-kindly-select`, () => {
  // set components
  Vue.use(KindlySelect);

  async function createVm() {
    const vm = new Vue({
      el: '#app'
    });

    await Vue.nextTick();

    return vm.$children[0];
  }

  beforeEach(() => {
    document.body.innerHTML = `
      <div id="app">
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
    `;
  });

  it('can mount', async () => {
    await createVm();

    expect(document.body.innerHTML).toMatchSnapshot();
  });

  it('select first option', async () => {
    const select = await createVm();

    [...select.$children][0].handleClick();

    expect(select.activedescendant).toBe([...select.$children][0].computedId);
    expect(select.buttonText).toBe([...select.$children][0].text);
    expect(select.selected).toBe([...select.$children][0].value);
  });

  it('close ul', async () => {
    const select = await createVm();
    const button = document.querySelector('button');

    button.click();
    expect(select.hidden).toBe('false');

    [...select.$children][0].handleClick();
    expect(select.hidden).toBe('true');

    button.click();
    expect(select.hidden).toBe('false');

    document.body.click();
    expect(select.hidden).toBe('true');
  });
});
