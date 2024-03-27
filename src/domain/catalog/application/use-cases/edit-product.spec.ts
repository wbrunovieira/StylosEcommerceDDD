import { EditProductUseCase } from './edit-product';
import { InMemoryProductRepository } from '@/test/repositories/in-memory-product-repository';
import { makeProduct } from '@/test/factories/make-product';
import { UniqueEntityID } from '@/core/entities/unique-entity-id';

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

    await sut.execute({
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

    expect({
      name: inMemoryProductsRepository.items[0].name,
      description: inMemoryProductsRepository.items[0].description,
      price: inMemoryProductsRepository.items[0].price,
      stock: inMemoryProductsRepository.items[0].stock,
      colorId: inMemoryProductsRepository.items[0].colorId.map((id) =>
        id.toString()
      ),
      sizeId: inMemoryProductsRepository.items[0].sizeId.map((id) =>
        id.toString()
      ),
      materialId: inMemoryProductsRepository.items[0].materialId.toString(),
      brandID: inMemoryProductsRepository.items[0].brandId.toString(),
      slug: inMemoryProductsRepository.items[0].slug.value,
    }).toMatchObject({
      name: 'name teste',
      description: 'description teste',
      price: 10,
      stock: 10,
      colorId: [],
      sizeId: [],
      materialId: 'material-1',
      brandID: 'brand-1',
      slug: 'name-teste',
    });
  });
});
