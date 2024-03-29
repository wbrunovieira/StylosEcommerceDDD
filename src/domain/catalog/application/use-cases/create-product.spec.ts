import { InMemoryProductColorRepository } from '@/test/repositories/in-memory-product-color-repository';
import { ProductRepository } from '../repositories/product-repository';
import { CreateProductUseCase } from './create-product';
import { InMemoryProductRepository } from '@/test/repositories/in-memory-product-repository';
import { ProductColorRepository } from '../repositories/product-color-repository';
import { InMemoryColorRepository } from '@/test/repositories/in-memory-color-repository';
import { ColorRepository } from '../repositories/color-repository';

import { UniqueEntityID } from '@/core/entities/unique-entity-id';
import { makeColor } from '@/test/factories/make-color';

describe('CreateProductUseCase', () => {
  let inMemoryProductRepository: ProductRepository;

  let sut: CreateProductUseCase;

  let inMemoryProductColorRepository: ProductColorRepository;
  let inMemoryColorRepository: ColorRepository;

  beforeEach(() => {
    inMemoryProductRepository = new InMemoryProductRepository();
    inMemoryProductColorRepository = new InMemoryProductColorRepository();
    inMemoryColorRepository = new InMemoryColorRepository();

    const color1 = makeColor({ name: 'Cor 1' }, new UniqueEntityID('1'));
    const color2 = makeColor({ name: 'Cor 2' }, new UniqueEntityID('2'));

    inMemoryColorRepository.create(color1);
    inMemoryColorRepository.create(color2);

    sut = new CreateProductUseCase(
      inMemoryProductRepository,
      inMemoryProductColorRepository,
      inMemoryColorRepository
    );
  });

  it('should be able to create a product without colors', async () => {
    const result = await sut.execute({
      name: 'name',
      description: 'description',
      colorIds: [],
      sizeIds: ['1', '2'],
      materialId: '1',
      brandID: '1',
      price: 100,
      stock: 1,
    });

    expect(result.isRight()).toBeTruthy();
    expect(
      (inMemoryProductRepository as InMemoryProductRepository).items
    ).toHaveLength(1);
    expect(
      (inMemoryProductRepository as InMemoryProductRepository).items
    ).toHaveLength(1);
  });

  it('should be able to create a product with colors', async () => {
    const result = await sut.execute({
      name: 'name',
      description: 'description',
      colorIds: ['1', '2'],
      sizeIds: ['1', '2'],
      materialId: '1',
      brandID: '1',
      price: 100,
      stock: 1,
    });

    console.log('result ', result);

    expect(result.isRight()).toBeTruthy();
    expect(
      (inMemoryProductRepository as InMemoryProductRepository).items
    ).toHaveLength(1);

    const createdProduct = (
      inMemoryProductRepository as InMemoryProductRepository
    ).items[0];
    const productColors = await inMemoryProductColorRepository.findByProductId(
      createdProduct.id.toString()
    );
    console.log('productColors ', productColors);

    expect(productColors).toHaveLength(2);
    expect(
      productColors.some((pc) => pc.colorId.toString() === '1')
    ).toBeTruthy();
    expect(
      productColors.some((pc) => pc.colorId.toString() === '2')
    ).toBeTruthy();
  });
});
