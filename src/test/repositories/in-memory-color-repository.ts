import { ColorRepository } from '@/domain/catalog/application/repositories/color-repository';

import { Color } from '@/domain/catalog/enterprise/entities/color';

export class InMemoryColorRepository implements ColorRepository {
  async findById(id: string) {
    const color = this.items.find((item) => item.id.toString() === id);

    if (!color) {
      return null;
    }

    return color;
  }

  async delete(color: Color) {
    const itemIndex = this.items.findIndex((item) => item.id === color.id);

    this.items.splice(itemIndex, 1);
  }
  public items: Color[] = [];

  async create(color: Color) {
    this.items.push(color);
  }
}
