import { action } from '@ember/object';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import type RentalModel from 'ember-playground/models/rental';

export interface RentalsSignature {
  // The arguments accepted by the component
  Args: {
    rentals: RentalModel[];
  };
  // Any blocks yielded by the component
  Blocks: {
    default: [];
  };
  // The element to which `...attributes` is applied in the component template
  Element: null;
}

export default class Rentals extends Component<RentalsSignature> {
  @tracked query = '';

  @action
  updateQuery(event: Event) {
    const formData = new FormData(event.currentTarget as HTMLFormElement);
    this.query = formData.get('rental-search-term') as string;
  }

  @action
  handleSubmit(event: Event) {
    event.preventDefault();
    this.updateQuery(event);
  }
}
