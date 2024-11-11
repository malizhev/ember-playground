import Component from '@glimmer/component';
import type { RentalModel } from 'api/rentals';

export interface RentalSignature {
  // The arguments accepted by the component
  Args: {
    rental: RentalModel;
  };
  // Any blocks yielded by the component
  Blocks: {
    default: [];
  };
  // The element to which `...attributes` is applied in the component template
  Element: null;
}

const COMMUNITY_CATEGORIES = ['Condo', 'Townhouse', 'Apartment'];

export default class Rental extends Component<RentalSignature> {
  get rentalType() {
    const { rental } = this.args;
    return COMMUNITY_CATEGORIES.includes(rental.category)
      ? 'Community'
      : 'Standalone';
  }
}
