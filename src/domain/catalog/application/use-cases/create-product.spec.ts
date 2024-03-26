import { CreateProductUseCase } from './create-product';
import { ProductRepository } from '../repositories/product-repository';
import { InMemoryProductRepository } from '@/test/repositories/in-memory-product-repository';

let inMemoryProductRepository: ProductRepository;
let sut: CreateProductUseCase;

beforeEach(() => {
  inMemoryProductRepository = new InMemoryProductRepository();
  sut = new CreateProductUseCase(inMemoryProductRepository);
});
it('should be able to create a product', async () => {
  const { product } = await sut.execute({
    name: 'name',
    description: 'description',
    colorIds: ['1', '2'],
    sizeIds: ['1', '2'],
    materialId: '1',
    brandID: '1',
    price: 100,
    stock: 1,
  });

  expect(product.id).toBeTruthy();
  expect(
    (inMemoryProductRepository as InMemoryProductRepository).items[0].id
  ).toEqual(product.id);
});
