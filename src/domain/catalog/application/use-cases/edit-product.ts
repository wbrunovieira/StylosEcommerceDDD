import { UniqueEntityID } from '@/core/entities/unique-entity-id';
import { ProductRepository } from '../repositories/product-repository';
import { Slug } from '../../enterprise/entities/value-objects/slug';
import { Product } from '../../enterprise/entities/product';
import { Either, left, right } from '@/core/either';
import { ResourceNotFoundError } from './errors/resource-not-found-error';

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

type EditProductUseCaseResponse = Either<
  ResourceNotFoundError,
  {
    product: Product;
  }
>;
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
      return left(new ResourceNotFoundError());
    }

    product.name = name;
    product.description = description;
    product.colorId = colorId;
    product.sizeId = sizeId;
    product.materialId = materialId;
    product.brandId = brandID;
    product.price = price;
    product.stock = stock;
    product.slug = Slug.createFromText(slug);
    slug: Slug.createFromText('name-teste'),
      await this.productsRepository.save(product);

    return right({
      product,
    });
  }
}
