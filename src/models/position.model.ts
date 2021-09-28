import { Position as IPosition } from '../graphql.schema';
export class Position implements IPosition {
  id: string;

  name: string;

  description: string;
}
