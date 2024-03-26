import { InMemoryColorRepository } from '@/test/repositories/in-memory-color-repository';
import { ColorRepository } from '../repositories/color-repository';
import { CreateColorUseCase } from './create-color';

let inMemoryColorRepository: InMemoryColorRepository;
let sut: CreateColorUseCase;

describe('CreateColorUseCase', () => {
  beforeEach(() => {
    inMemoryColorRepository = new InMemoryColorRepository();
    sut = new CreateColorUseCase(inMemoryColorRepository);
  });

  it('should be able to create a color', async () => {
    const { color } = await sut.execute({
      name: 'red',
    });

    expect(color.id).toBeTruthy();
    expect(inMemoryColorRepository.items[0].id).toEqual(color.id);
  });
});
