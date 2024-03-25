import { test, expect } from 'vitest';
import { CreateProductUseCase } from './create-product';

test('create a product', () => {
  const product = new CreateProductUseCase().execute({
    ProductId: '1',
    name: 'name',
    description: 'description',
    color: 'color',
    size: 'size',
    material: 'material',
    brand: 'brand',
    price: 'price',
    stock: 1,
  });

  expect(product.name).toEqual('name');
});
