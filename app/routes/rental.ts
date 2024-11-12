import type Store from '@ember-data/store';
import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { findRecord } from '@ember-data/json-api/request';
import type RentalModel from 'ember-playground/models/rental';

export default class RentalRoute extends Route<RentalModel> {
  @service declare store: Store;

  async model(params: Record<string, string>) {
    const { content } = await this.store.request(
      findRecord<RentalModel>('rental', params['rental_id'] ?? ''),
    );

    return content.data;
  }
}
