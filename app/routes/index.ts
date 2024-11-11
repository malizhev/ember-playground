import Route from '@ember/routing/route';
import type { RentalResponse } from 'api/rentals';
import type { GenericResponse } from 'api/response';

export default class IndexRoute extends Route {
  async model() {
    const response = await fetch('/api/rentals.json');
    const { data } = (await response.json()) as GenericResponse<
      RentalResponse[]
    >;
    return data.map((item) => {
      const { id, type, attributes } = item;
      return { id, type, ...attributes };
    });
  }
}
