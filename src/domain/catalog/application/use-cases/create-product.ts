import { Either, left, right } from '@/core/either';
import { Product } from '../../enterprise/entities/product';
import { ProductColor } from '../../enterprise/entities/product-color';

import { ProductRepository } from '../repositories/product-repository';

import { UniqueEntityID } from '@/core/entities/unique-entity-id';
import { ProductColorRepository } from '../repositories/product-color-repository';
import { ColorRepository } from '../repositories/color-repository';
import { ResourceNotFoundError } from './errors/resource-not-found-error';

interface CreateProductUseCaseRequest {
  name: string;
  description: string;
  colorIds: string[];
  sizeIds: string[];
  materialId: string;
  brandID: string;
  price: number;
  stock: number;
}

type CreateProductUseCaseResponse = Either<
  ResourceNotFoundError,
  {
    product: Product;
  }
>;
export class CreateProductUseCase {
  constructor(
    private productRepository: ProductRepository,
    private productColorRepository: ProductColorRepository,
    private colorRepository: ColorRepository
  ) {}

  async execute({
    name,
    description,
    colorIds,
    sizeIds,
    materialId,
    brandID,
    price,
    stock,
  }: CreateProductUseCaseRequest): Promise<CreateProductUseCaseResponse> {
    const product = Product.create({
      name,
      description,

      sizeId: sizeIds.map((id) => new UniqueEntityID(id)),
      materialId: new UniqueEntityID(materialId),
      brandID: new UniqueEntityID(brandID),
      price,
      stock,
    });

    await this.productRepository.create(product);

    for (const colorId of colorIds) {
      const color = await this.colorRepository.findById(colorId);
      if (!color) {
        return left(new ResourceNotFoundError());
      }
    }

    for (const colorId of colorIds) {
      const productColor = new ProductColor({
        productId: product.id,
        colorId: new UniqueEntityID(colorId),
      });
      await this.productColorRepository.create(productColor);
    }

    return right({
      product,
    });
  }
}
