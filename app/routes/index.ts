import Route from '@ember/routing/route';
import { service } from '@ember/service';
// eslint-disable-next-line ember/use-ember-data-rfc-395-imports
import type Store from '@ember-data/store';
import { query } from '@ember-data/json-api/request';
import type RentalModel from 'ember-playground/models/rental';

export default class IndexRoute extends Route {
  @service declare store: Store;

  async model() {
    const response = await this.store.request(query<RentalModel>('rental'));
    return response.content.data;
  }
}
