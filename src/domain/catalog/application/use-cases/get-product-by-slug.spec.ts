import { UniqueEntityID } from '@/core/entities/unique-entity-id';
import { InMemoryProductRepository } from '@/test/repositories/in-memory-product-repository';
import { Product } from '../../enterprise/entities/product';
import { Slug } from '../../enterprise/entities/value-objects/slug';
import { GetProductBySlugUseCase } from './get-product-by-slug';

let inMemoryProductRepository: InMemoryProductRepository;
let sut: GetProductBySlugUseCase;

describe('Get Question By Slug', () => {
  beforeEach(() => {
    inMemoryProductRepository = new InMemoryProductRepository();
    sut = new GetProductBySlugUseCase(inMemoryProductRepository);
  });

  it('should be able to get a question by slug', async () => {
    const newProduct = Product.create({
      name: 'Example product',
      description: 'Example description',
      price: 100,
      colorId: [new UniqueEntityID()],
      sizeId: [new UniqueEntityID()],
      brandID: new UniqueEntityID(),

      materialId: new UniqueEntityID(),
      stock: 10,

      slug: Slug.create('example-product'),
    });

    await inMemoryProductRepository.create(newProduct);

    const { product } = await sut.execute({
      slug: 'example-product',
    });

    expect(product.id).toBeTruthy();
    expect(product.name).toEqual(newProduct.name);
  });
});
