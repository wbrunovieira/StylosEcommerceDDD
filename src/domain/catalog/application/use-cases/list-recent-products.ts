import { Product } from '@/domain/catalog/enterprise/entities/product';
import { ProductRepository } from '../repositories/product-repository';

interface ListRecentProductsUseCaseRequest {
  page: number;
}

interface ListRecentProductsUseCaseResponse {
  products: Product[];
}

export class ListRecentProductsUseCase {
  constructor(private productsRepository: ProductRepository) {}

  async execute({
    page,
  }: ListRecentProductsUseCaseRequest): Promise<ListRecentProductsUseCaseResponse> {
    const products = await this.productsRepository.findManyRecent({ page });

    return {
      products,
    };
  }
}
