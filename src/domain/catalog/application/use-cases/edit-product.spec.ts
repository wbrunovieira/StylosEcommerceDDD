import { EditProductUseCase } from './edit-product';
import { InMemoryProductRepository } from '@/test/repositories/in-memory-product-repository';
import { makeProduct } from '@/test/factories/make-product';
import { UniqueEntityID } from '@/core/entities/unique-entity-id';
import { ResourceNotFoundError } from './errors/resource-not-found-error';

let inMemoryProductsRepository: InMemoryProductRepository;
let sut: EditProductUseCase;

describe('Edit Product', () => {
  beforeEach(() => {
    inMemoryProductsRepository = new InMemoryProductRepository();
    sut = new EditProductUseCase(inMemoryProductsRepository);
  });

  it('should be able to edit a product', async () => {
    const newProduct = makeProduct({}, new UniqueEntityID('product-1'));

    await inMemoryProductsRepository.create(newProduct);

    const result = await sut.execute({
      productId: newProduct.id.toValue(),
      name: 'name teste',
      description: 'description teste',
      price: 10,
      stock: 10,
      colorId: [],
      sizeId: [],
      materialId: new UniqueEntityID('material-1'),
      brandID: new UniqueEntityID('brand-1'),
      slug: 'name-teste',
    });
    expect(result.isRight()).toBe(true);
  });

  it('should return an error if the product does not exist', async () => {
    const result = await sut.execute({
      productId: 'non-existing-product',
      name: 'name teste',
      description: 'description teste',
      price: 10,
      stock: 10,
      colorId: [],
      sizeId: [],
      materialId: new UniqueEntityID('material-1'),
      brandID: new UniqueEntityID('brand-1'),
      slug: 'name-teste',
    });

    expect(result.isLeft()).toBe(true);
    expect(result.value).toBeInstanceOf(ResourceNotFoundError);
  });
});
