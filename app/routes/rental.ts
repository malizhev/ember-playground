import Route from '@ember/routing/route';
import type { RentalModel, RentalResponse } from 'api/rentals';
import type { GenericResponse } from 'api/response';

interface RentalRouteParams {
  rental_id: string;
}

export default class RentalRoute extends Route<RentalModel, RentalRouteParams> {
  async model(params: RentalRouteParams) {
    const response = await fetch(`/api/rentals/${params.rental_id}.json`);
    const { data } = (await response.json()) as GenericResponse<RentalResponse>;
    const { id, type, attributes } = data;
    return { id, type, ...attributes };
  }
}
