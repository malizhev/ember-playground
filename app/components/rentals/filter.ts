import Component from '@glimmer/component';
import type RentalModel from 'ember-playground/models/rental';

export interface RentalsFilterSignature {
  // The arguments accepted by the component
  Args: {
    query: string;
    rentals: RentalModel[];
  };
  // Any blocks yielded by the component
  Blocks: {
    default: [];
  };
  // The element to which `...attributes` is applied in the component template
  Element: null;
}

export default class RentalsFilter extends Component<RentalsFilterSignature> {
  get results() {
    const { query } = this.args;
    let { rentals } = this.args;

    if (query) {
      rentals = rentals.filter((rental) => rental.title.includes(query));
    }

    return rentals;
  }
}
