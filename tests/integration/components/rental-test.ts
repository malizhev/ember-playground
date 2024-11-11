import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-playground/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | rental', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`<Rental />`);

    assert.dom('.rental').exists();
  });
});
