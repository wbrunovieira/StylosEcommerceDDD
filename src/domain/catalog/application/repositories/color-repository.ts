import { Color } from '../../enterprise/entities/color';

export interface ColorRepository {
  create(product: Color): Promise<void>;
}
