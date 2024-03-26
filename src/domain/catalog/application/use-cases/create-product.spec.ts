import { CreateProductUseCase } from './create-product';
import { ProductRepository } from '../repositories/product-repository';

const fakeProductRepository: ProductRepository = {
  create: async (product) => product,
};

test('create a product', async () => {
  const createProduct = new CreateProductUseCase(fakeProductRepository);
  const product = await createProduct.execute({
    name: 'name',
    slug: { value: 'slug' },
    description: 'description',
    colorIds: ['1', '2'],
    sizeIds: ['1', '2'],
    materialId: '1',
    brandID: '1',
    price: 100,
    stock: 1,
  });

  expect(product.name).toEqual('name');
});
