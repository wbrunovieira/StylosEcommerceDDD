import { UniqueEntityID } from '@/core/entities/unique-entity-id';
import { InMemoryProductRepository } from '@/test/repositories/in-memory-product-repository';
import { DeleteProductUseCase } from './delete-product';

import { makeProduct } from '@/test/factories/make-product';
import { ResourceNotFoundError } from './errors/resource-not-found-error';

let inMemoryProductRepository: InMemoryProductRepository;
let sut: DeleteProductUseCase;

describe('Delete Product', () => {
  beforeEach(() => {
    inMemoryProductRepository = new InMemoryProductRepository();
    sut = new DeleteProductUseCase(inMemoryProductRepository);
  });

  it('should be able to delete a product', async () => {
    const newProduct = makeProduct({}, new UniqueEntityID('product-1'));

    await inMemoryProductRepository.create(newProduct);

    const result = await sut.execute({
      productId: 'product-1',
    });

    expect(result.isRight()).toBe(true);
  });

  it('should return an error if the product does not exist', async () => {
    const result = await sut.execute({
      productId: 'non-existing-product',
    });

    expect(result.isLeft()).toBe(true);
    expect(result.value).toBeInstanceOf(ResourceNotFoundError);
  });
});
