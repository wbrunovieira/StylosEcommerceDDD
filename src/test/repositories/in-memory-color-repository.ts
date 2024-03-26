import { ColorRepository } from '@/domain/catalog/application/repositories/color-repository';

import { Color } from '@/domain/catalog/enterprise/entities/color';

export class InMemoryColorRepository implements ColorRepository {
  public items: Color[] = [];

  async create(color: Color) {
    this.items.push(color);
  }
}
