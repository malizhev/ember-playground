import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-playground/tests/helpers';

module('Acceptance | super rentals', function (hooks) {
  setupApplicationTest(hooks);

  test('visiting /', async function (assert) {
    await visit('/');

    assert.dom('h2').hasText('Welcome to Super Rentals!');
    assert.dom('.jumbo a.button').hasText('About us');

    assert.strictEqual(currentURL(), '/');
  });

  test('visiting /about', async function (assert) {
    await visit('/about');

    assert.dom('h2').hasText('About Super Rentals');

    assert.strictEqual(currentURL(), '/about');
  });

  test('visiting /contact', async function (assert) {
    await visit('/contact');

    assert.dom('h2').hasText('Contact Us');

    assert.strictEqual(currentURL(), '/contact');
  });
});
