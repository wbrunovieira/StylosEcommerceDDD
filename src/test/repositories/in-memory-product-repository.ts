import { ProductRepository } from '@/domain/catalog/application/repositories/product-repository';
import { Product } from '@/domain/catalog/enterprise/entities/product';

export class InMemoryProductRepository implements ProductRepository {
  public items: Product[] = [];

  async create(product: Product) {
    this.items.push(product);
  }
}
