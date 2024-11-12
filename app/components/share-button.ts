import type RouterService from '@ember/routing/router-service';
import { service } from '@ember/service';
import Component from '@glimmer/component';

export interface ShareButtonSignature {
  // The arguments accepted by the component
  Args: {
    text?: string;
    hashtags?: string;
    via?: string;
  };
  // Any blocks yielded by the component
  Blocks: {
    default: [];
  };
  // The element to which `...attributes` is applied in the component template
  Element: null;
}

const TWEET_INTENT = 'https://twitter.com/intent/tweet';

export default class ShareButton extends Component<ShareButtonSignature> {
  @service declare router: RouterService;

  get currentURL() {
    return new URL(
      this.router.currentURL ?? '',
      window.location.origin,
    ).toString();
  }

  get shareURL() {
    const url = new URL(TWEET_INTENT);

    url.searchParams.set('url', this.currentURL);

    if (this.args.text) {
      url.searchParams.set('text', this.args.text);
    }

    if (this.args.hashtags) {
      url.searchParams.set('hashtags', this.args.hashtags);
    }

    if (this.args.via) {
      url.searchParams.set('via', this.args.via);
    }

    return url;
  }
}
