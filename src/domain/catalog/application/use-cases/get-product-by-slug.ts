import { ProductRepository } from '../repositories/product-repository';
import { Product } from '../../enterprise/entities/product';

interface GetProductBySlugUseCaseRequest {
  slug: string;
}

interface GetProductBySlugUseCaseResponse {
  product: Product;
}

export class GetProductBySlugUseCase {
  constructor(private productRepository: ProductRepository) {}

  async execute({
    slug,
  }: GetProductBySlugUseCaseRequest): Promise<GetProductBySlugUseCaseResponse> {
    const product = await this.productRepository.findBySlug(slug);

    if (!product) {
      throw new Error('product not found.');
    }

    return {
      product,
    };
  }
}
