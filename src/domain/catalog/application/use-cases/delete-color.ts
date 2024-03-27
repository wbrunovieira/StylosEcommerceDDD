import { ColorRepository } from '../repositories/color-repository';

interface DeleteColorUseCaseRequest {
  colorId: string;
}

interface DeleteColorUseCaseResponse {}

export class DeleteColorUseCase {
  constructor(private colorsRepository: ColorRepository) {}

  async execute({
    colorId,
  }: DeleteColorUseCaseRequest): Promise<DeleteColorUseCaseResponse> {
    const color = await this.colorsRepository.findById(colorId);

    if (!color) {
      throw new Error('Color not found.');
    }

    await this.colorsRepository.delete(color);

    return {};
  }
}
