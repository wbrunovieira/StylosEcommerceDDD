import { Either, left, right } from '@/core/either';
import { ColorRepository } from '../repositories/color-repository';

interface DeleteColorUseCaseRequest {
  colorId: string;
}

type DeleteColorUseCaseResponse = Either<string, {}>;

export class DeleteColorUseCase {
  constructor(private colorsRepository: ColorRepository) {}

  async execute({
    colorId,
  }: DeleteColorUseCaseRequest): Promise<DeleteColorUseCaseResponse> {
    const color = await this.colorsRepository.findById(colorId);

    if (!color) {
      return left('Color not found');
    }

    await this.colorsRepository.delete(color);

    return right({});
  }
}
