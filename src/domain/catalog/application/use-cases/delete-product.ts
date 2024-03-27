import { ProductRepository } from '../repositories/product-repository';

interface DeleteProductUseCaseRequest {
  productId: string;
}

interface DeleteProductUseCaseResponse {}

export class DeleteProductUseCase {
  constructor(private productsRepository: ProductRepository) {}

  async execute({
    productId,
  }: DeleteProductUseCaseRequest): Promise<DeleteProductUseCaseResponse> {
    const product = await this.productsRepository.findById(productId);

    if (!product) {
      throw new Error('Product not found.');
    }

    await this.productsRepository.delete(product);

    return {};
  }
}
