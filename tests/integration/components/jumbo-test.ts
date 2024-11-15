import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-playground/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | jumbo', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders jumbo component', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Jumbo>Hello world</Jumbo>`);

    assert.dom('.jumbo').exists();
    assert.dom('.jumbo').hasText('Hello world');
    assert.dom('.jumbo .tomster').doesNotExist();
  });
});
