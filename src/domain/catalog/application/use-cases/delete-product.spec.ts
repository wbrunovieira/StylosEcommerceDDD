import { UniqueEntityID } from '@/core/entities/unique-entity-id';
import { InMemoryProductRepository } from '@/test/repositories/in-memory-product-repository';
import { DeleteProductUseCase } from './delete-product';

import { makeProduct } from '@/test/factories/make-product';

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

    await sut.execute({
      productId: 'product-1',
    });

    expect(inMemoryProductRepository.items).toHaveLength(0);
  });
});
