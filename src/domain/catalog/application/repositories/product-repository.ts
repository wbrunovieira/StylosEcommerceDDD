import { Product } from '../../enterprise/entities/product';

export interface ProductRepository {
  findById(id: string): Promise<Product | null>;
  create(product: Product): Promise<void>;
  findBySlug(slug: string): Promise<Product | null>;
  delete(product: Product): Promise<void>;
}
