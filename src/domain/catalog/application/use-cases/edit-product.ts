import { UniqueEntityID } from '@/core/entities/unique-entity-id';
import { ProductRepository } from '../repositories/product-repository';
import { Slug } from '../../enterprise/entities/value-objects/slug';

interface EditProductUseCaseRequest {
  productId: string;
  name: string;
  description: string;
  colorId: UniqueEntityID[];
  sizeId: UniqueEntityID[];
  materialId: UniqueEntityID;
  brandID: UniqueEntityID;
  price: number;
  stock: number;
  slug: string;
}

interface EditProductUseCaseResponse {}

export class EditProductUseCase {
  constructor(private productsRepository: ProductRepository) {}

  async execute({
    productId,
    name,
    description,
    colorId,
    sizeId,
    materialId,
    brandID,
    price,
    stock,
    slug,
  }: EditProductUseCaseRequest): Promise<EditProductUseCaseResponse> {
    const product = await this.productsRepository.findById(productId);

    if (!product) {
      throw new Error('Product not found.');
    }

    product.name = name;
    product.description = description;
    product.colorId = colorId;
    product.sizeId = sizeId;
    product.materialId = materialId;
    product.brandId = brandID;
    product.price = price;
    product.stock = stock;
    slug: Slug.createFromText('name-teste'),
      await this.productsRepository.save(product);

    return {};
  }
}
