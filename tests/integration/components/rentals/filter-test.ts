import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-playground/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | rentals/filter', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Rentals::Filter />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <Rentals::Filter>
        template block text
      </Rentals::Filter>
    `);

    assert.dom().hasText('template block text');
  });
});
