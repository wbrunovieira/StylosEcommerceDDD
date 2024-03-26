import { Product } from '../entities/product';

import { ProductRepository } from '../repositories/product-repository';

import { Slug } from '../entities/value-objects/slug';
import { UniqueEntityID } from '@/core/entities/unique-entity-id';

interface CreateProductUseCaseRequest {
  name: string;
  description: string;
  colorIds: string[];
  sizeIds: string[];
  materialId: string;
  brandID: string;
  price: number;
  stock: number;
  slug: Slug;
}

export class CreateProductUseCase {
  constructor(private productRepository: ProductRepository) {}

  async execute({
    name,
    description,
    colorIds,
    sizeIds,
    materialId,

    brandID,
    price,
    stock,
  }: CreateProductUseCaseRequest) {
    const product = Product.create({
      name,
      description,
      colorId: colorIds.map((id) => new UniqueEntityID(id)),
      sizeId: sizeIds.map((id) => new UniqueEntityID(id)),
      materialId: new UniqueEntityID(materialId),
      brandID: new UniqueEntityID(brandID),
      price,
      stock,
    });

    await this.productRepository.create(product);

    return product;
  }
}
