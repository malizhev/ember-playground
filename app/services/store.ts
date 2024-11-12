import BaseStore from '@ember-data/store';
import { service } from '@ember/service';
import type RequestManager from './request-manager';

export default class Store extends BaseStore {
  @service declare requestManager: RequestManager;
}

declare module '@ember/service' {
  interface Registry {
    store: Store;
  }
}
