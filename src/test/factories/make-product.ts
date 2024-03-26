import { UniqueEntityID } from '@/core/entities/unique-entity-id';
import {
  Product,
  ProductProps,
} from '@/domain/catalog/enterprise/entities/product';

export function makeProduct(override: Partial<ProductProps> = {}) {
  const product = Product.create({
    name: 'Example product',
    description: 'Example description',
    price: 100,
    colorId: [new UniqueEntityID()],
    sizeId: [new UniqueEntityID()],
    brandID: new UniqueEntityID(),

    materialId: new UniqueEntityID(),
    stock: 10,

    ...override,
  });

  return product;
}
