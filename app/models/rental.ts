import Model, { attr } from '@ember-data/model';
import { Type } from '@warp-drive/core-types/symbols';
import type { RentalLocation } from 'api/rentals';

const COMMUNITY_CATEGORIES = ['Condo', 'Townhouse', 'Apartment'];

export default class RentalModel extends Model {
  [Type] = 'rental' as const;

  @attr declare title: string;
  @attr declare owner: string;
  @attr declare city: string;
  @attr declare location: RentalLocation;
  @attr declare category: string;
  @attr declare image: string;
  @attr declare bedrooms: number;
  @attr declare description: string;

  get type() {
    if (COMMUNITY_CATEGORIES.includes(this.category)) {
      return 'Community';
    } else {
      return 'Standalone';
    }
  }
}

// declare module 'ember-data/types/registries/model' {
//   export default interface ModelRegistry {
//     rental: RentalModel;
//   }
// }
