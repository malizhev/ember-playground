import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-playground/tests/helpers';
import { click, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | rental/image', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders and passes the attributes', async function (assert) {
    await render(hbs`
      <Rental::Image src="assets/foo.png" alt="foo" />
    `);

    assert
      .dom('.image img')
      .exists()
      .hasAttribute('src', 'assets/foo.png')
      .hasAttribute('alt', 'foo');
  });

  test('clicking on the component toggles its size', async function (assert) {
    await render(hbs`
      <Rental::Image src="assets/foo.png" alt="foo" />
    `);

    assert.dom('button.image').exists();

    assert.dom('.image').doesNotHaveClass('large');
    assert.dom('.image small').hasText('View larger');

    await click('.image');
    assert.dom('.image').hasClass('large');
    assert.dom('.image small').hasText('View smaller');

    await click('.image');
    assert.dom('.image').doesNotHaveClass('large');
    assert.dom('.image small').hasText('View larger');
  });
});
