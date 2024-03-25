import { Material } from '../entities/material';
import { Product } from '../entities/product';
import { Size } from '../entities/size';
import { ProductRepository } from '../repositories/product-repository';
import { Color } from '../entities/color'; // Supondo que Color seja um tipo definido em algum lugar
import { Slug } from '../entities/value-objects/slug';

interface CreateProductUseCaseRequest {
  ProductId: string;
  name: string;
  description: string;
  color: string;
  size: string;
  material: string;
  brand: string;
  price: number;
  stock: number;
  slug: Slug; // Add the missing 'slug' property
}

export class CreateProductUseCase {
  constructor(private productRepository: ProductRepository) {}
  async execute({
    ProductId,
    name,
    description,
    color,
    size,
    material,
    slug,
    brand,
    price,
    stock,
  }: CreateProductUseCaseRequest) {
    const colorInstance = new Color({ name: color });
    const materialInstance = new Material({ name: material });

    const sizeInstance = new Size({ name: size });
    const product = new Product({
      name,
      description,
      color: [colorInstance],
      size: [sizeInstance],
      material: [materialInstance],
      brandID: brand,
      price,
      stock,
      slug,
    });

    await this.productRepository.create(product);

    return product;
  }
}
