import { Color } from '../../enterprise/entities/color';

export interface ColorRepository {
  findById(id: string): Promise<Color | null>;
  create(product: Color): Promise<void>;
  delete(product: Color): Promise<void>;
}
