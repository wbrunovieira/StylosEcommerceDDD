import { faker } from '@faker-js/faker';

import { UniqueEntityID } from '@/core/entities/unique-entity-id';
import {
  Product,
  ProductProps,
} from '@/domain/catalog/enterprise/entities/product';

export function makeProduct(override: Partial<ProductProps> = {}) {
  const product = Product.create({
    name: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    price: Number(faker.commerce.price()),
    colorId: [new UniqueEntityID()],
    sizeId: [new UniqueEntityID()],
    brandID: new UniqueEntityID(),

    materialId: new UniqueEntityID(),
    stock: faker.helpers.rangeToNumber(100),

    ...override,
  });

  return product;
}
