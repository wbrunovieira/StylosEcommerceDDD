import { Either, left, right } from '@/core/either';
import { ProductRepository } from '../repositories/product-repository';
import { ResourceNotFoundError } from './errors/resource-not-found-error';

interface DeleteProductUseCaseRequest {
  productId: string;
}

type DeleteProductUseCaseResponse = Either<ResourceNotFoundError, {}>;
export class DeleteProductUseCase {
  constructor(private productsRepository: ProductRepository) {}

  async execute({
    productId,
  }: DeleteProductUseCaseRequest): Promise<DeleteProductUseCaseResponse> {
    const product = await this.productsRepository.findById(productId);

    if (!product) {
      return left(new ResourceNotFoundError());
    }

    await this.productsRepository.delete(product);

    return right({});
  }
}
