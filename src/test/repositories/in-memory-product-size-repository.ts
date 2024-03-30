import { ProductSize } from '@/domain/catalog/enterprise/entities/product-size';

import { PaginationParams } from '@/core/repositories/pagination-params';

export class InMemoryProductSizeRepository {
  public items: ProductSize[] = [];

  async create(productSize: ProductSize): Promise<void> {
    this.items.push(productSize);
  }

  async findByProductId(productId: string): Promise<ProductSize[]> {
    return this.items.filter((item) => item.productId.toString() === productId);
  }

  async findBySizeId(
    sizeId: string,
    params: PaginationParams
  ): Promise<ProductSize[]> {
    return this.items.filter((item) => item.sizeId.toString() === sizeId);
  }

  async delete(productSize: ProductSize): Promise<void> {
    const index = this.items.findIndex((item) => item.equals(productSize));
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }

  async deleteAllByProductId(productId: string): Promise<void> {
    this.items = this.items.filter(
      (item) => item.productId.toString() !== productId
    );
  }
}
