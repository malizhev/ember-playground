import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-playground/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import Service from '@ember/service';

class MockRouterService extends Service {
  get currentURL() {
    return '/foo/bar?baz=true#some-section';
  }
}

module('Integration | Component | share-button', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    this.owner.register('service:router', MockRouterService);
  });

  test('it renders', async function (assert) {
    const MOCK_URL = new URL(
      '/foo/bar?baz=true#some-section',
      window.location.origin,
    );

    await render(hbs`
      <ShareButton>
        Share
      </ShareButton>
    `);

    assert
      .dom('a')
      .hasText('Share')
      .hasAttribute(
        'href',
        `https://twitter.com/intent/tweet?url=${encodeURIComponent(MOCK_URL.href)}`,
      );
  });
});
