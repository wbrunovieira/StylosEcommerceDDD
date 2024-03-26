import { Product } from '../../enterprise/entities/product';

import { ProductRepository } from '../repositories/product-repository';

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
}

interface CreateProductUseCaseResponse {
  product: Product;
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
  }: CreateProductUseCaseRequest): Promise<CreateProductUseCaseResponse> {
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

    return {
      product,
    };
  }
}
