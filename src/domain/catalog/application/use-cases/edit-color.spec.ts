import { EditColorUseCase } from './edit-color';
import { InMemoryColorRepository } from '@/test/repositories/in-memory-color-repository';
import { makeColor } from '@/test/factories/make-color';
import { UniqueEntityID } from '@/core/entities/unique-entity-id';

let inMemoryColorsRepository: InMemoryColorRepository;
let sut: EditColorUseCase;

describe('Edit Color', () => {
  beforeEach(() => {
    inMemoryColorsRepository = new InMemoryColorRepository();
    sut = new EditColorUseCase(inMemoryColorsRepository);
  });

  it('should be able to edit a color', async () => {
    const newColor = makeColor({}, new UniqueEntityID('color-1'));

    await inMemoryColorsRepository.create(newColor);

    await sut.execute({
      colorId: newColor.id.toValue(),
      name: 'name teste',
    });
    console.log(newColor);

    expect({
      name: inMemoryColorsRepository.items[0].name,
    }).toMatchObject({
      name: 'name teste',
    });
  });
});
