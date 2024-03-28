import { UniqueEntityID } from '@/core/entities/unique-entity-id';
import { ColorRepository } from '../repositories/color-repository';
import { Color } from '../../enterprise/entities/color';
import { Either, left, right } from '@/core/either';
import { ResourceNotFoundError } from './errors/resource-not-found-error';
import { l } from 'vite/dist/node/types.d-aGj9QkWt';

interface EditColorUseCaseRequest {
  colorId: string;
  name: string;
}

type EditColorUseCaseResponse = Either<
  ResourceNotFoundError,
  {
    color: Color;
  }
>;

export class EditColorUseCase {
  constructor(private colorsRepository: ColorRepository) {}

  async execute({
    colorId,
    name,
  }: EditColorUseCaseRequest): Promise<EditColorUseCaseResponse> {
    const color = await this.colorsRepository.findById(colorId);

    if (!color) {
      return left(new ResourceNotFoundError());
    }

    color.name = name;

    await this.colorsRepository.save(color);

    return right({
      color,
    });
  }
}
