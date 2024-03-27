import { InMemoryProductRepository } from '@/test/repositories/in-memory-product-repository';

import { Slug } from '../../enterprise/entities/value-objects/slug';
import { GetProductBySlugUseCase } from './get-product-by-slug';
import { makeProduct } from '@/test/factories/make-product';

let inMemoryProductRepository: InMemoryProductRepository;
let sut: GetProductBySlugUseCase;

describe('Get Question By Slug', () => {
  beforeEach(() => {
    inMemoryProductRepository = new InMemoryProductRepository();
    sut = new GetProductBySlugUseCase(inMemoryProductRepository);
  });

  it('should be able to get a question by slug', async () => {
    const newProduct = makeProduct({
      slug: Slug.create('example-product'),
    });
    await inMemoryProductRepository.create(newProduct);
    console.log(newProduct);
    const { product } = await sut.execute({
      slug: 'example-product',
    });

    expect(product.id).toBeTruthy();
    expect(product.name).toEqual(newProduct.name);
  });
});
