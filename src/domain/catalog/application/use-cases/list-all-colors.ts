import { Color } from '../../enterprise/entities/color';
import { ColorRepository } from '../repositories/color-repository';

interface ListAllColorsUseCaseRequest {
  page: number;
}

interface ListAllColorsUseCaseResponse {
  colors: Color[];
}

export class ListAllColorsUseCase {
  constructor(private colorsRepository: ColorRepository) {}

  async execute({
    page,
  }: ListAllColorsUseCaseRequest): Promise<ListAllColorsUseCaseResponse> {
    const colors = await this.colorsRepository.findAll({ page });

    return {
      colors,
    };
  }
}
