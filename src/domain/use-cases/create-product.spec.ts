import { test, expect } from 'vitest';
import { CreateProductUseCase } from './create-product';
import { ProductRepository } from '../repositories/product-repository';

const fakeProductRepository: ProductRepository = {
  create: async (product) => product,
};

test('create a product', async () => {
  const createProduct = new CreateProductUseCase(fakeProductRepository);
  const product = await createProduct.execute({
    ProductId: '1',
    name: 'name',
    slug: { value: 'slug' },
    description: 'description',
    color: 'color',
    size: 'size',
    material: 'material',
    brand: 'brand',
    price: 100,
    stock: 1,
  });

  expect(product.name).toEqual('name');
});
