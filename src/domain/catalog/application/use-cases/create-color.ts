import { ColorRepository } from '../repositories/color-repository';
import { Color } from '../../enterprise/entities/color';

interface CreateColorUseCaseRequest {
  name: string;
}

interface CreateColorUseCaseResponse {
  color: Color;
}

export class CreateColorUseCase {
  constructor(private colorRepository: ColorRepository) {}

  async execute({
    name,
  }: CreateColorUseCaseRequest): Promise<CreateColorUseCaseResponse> {
    const color = Color.create({
      name,
    });

    await this.colorRepository.create(color);

    return {
      color,
    };
  }
}
