import { UniqueEntityID } from '@/core/entities/unique-entity-id';
import { ColorRepository } from '../repositories/color-repository';
import { Color } from '../../enterprise/entities/color';

interface EditColorUseCaseRequest {
  colorId: string;
  name: string;
}

interface EditColorUseCaseResponse {
  color: Color;
}

export class EditColorUseCase {
  constructor(private colorsRepository: ColorRepository) {}

  async execute({
    colorId,
    name,
  }: EditColorUseCaseRequest): Promise<EditColorUseCaseResponse> {
    const color = await this.colorsRepository.findById(colorId);

    if (!color) {
      throw new Error('Color not found.');
    }

    color.name = name;

    await this.colorsRepository.save(color);

    return {
      color,
    };
  }
}
