import { module, test } from 'qunit';
import { visit, currentURL, click, find } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-playground/tests/helpers';

module('Acceptance | super rentals', function (hooks) {
  setupApplicationTest(hooks);

  test('visiting /', async function (assert) {
    await visit('/');

    assert.dom('nav').exists();
    assert.dom('h1').hasText('SuperRentals');
    assert.dom('h2').hasText('Welcome to Super Rentals!');
    assert.dom('.jumbo a.button').hasText('About us');

    assert.strictEqual(currentURL(), '/');
  });

  test('visiting /about', async function (assert) {
    await visit('/about');

    assert.dom('nav').exists();
    assert.dom('h1').hasText('SuperRentals');
    assert.dom('h2').hasText('About Super Rentals');

    assert.strictEqual(currentURL(), '/about');
  });

  test('visiting /contact', async function (assert) {
    await visit('/contact');

    assert.dom('nav').exists();
    assert.dom('h1').hasText('SuperRentals');
    assert.dom('h2').hasText('Contact Us');

    assert.strictEqual(currentURL(), '/contact');
  });

  test('navigating using the nav-bar', async function (assert) {
    const linkSelectors = {
      home: 'nav a.menu-index',
      about: 'nav a.menu-about',
      contact: 'nav a.menu-contact',
    };

    await visit('/');

    assert.dom(linkSelectors.home).hasText('SuperRentals');
    assert.dom(linkSelectors.about).hasText('About');
    assert.dom(linkSelectors.contact).hasText('Contact');

    await click(linkSelectors.about);
    assert.strictEqual(currentURL(), '/about');

    await click(linkSelectors.contact);
    assert.strictEqual(currentURL(), '/contact');

    await click(linkSelectors.home);
    assert.strictEqual(currentURL(), '/');
  });

  test('viewing the details of a rental property', async function (assert) {
    await visit('/');

    await click('.rentals ul li:first-child a');
    assert.strictEqual(currentURL(), '/rentals/grand-old-mansion');

    const shareButton = find('a.share') as HTMLAnchorElement;
    const shareURL = new URL(shareButton.href);

    assert.strictEqual(shareURL.host, 'twitter.com');
  });
});
