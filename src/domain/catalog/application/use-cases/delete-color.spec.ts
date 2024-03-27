import { UniqueEntityID } from '@/core/entities/unique-entity-id';
import { InMemoryColorRepository } from '@/test/repositories/in-memory-color-repository';
import { DeleteColorUseCase } from './delete-color';

import { makeColor } from '@/test/factories/make-color';

let inMemoryColorRepository: InMemoryColorRepository;
let sut: DeleteColorUseCase;

describe('Delete Color', () => {
  beforeEach(() => {
    inMemoryColorRepository = new InMemoryColorRepository();
    sut = new DeleteColorUseCase(inMemoryColorRepository);
  });

  it('should be able to delete a color', async () => {
    const newColor = makeColor({}, new UniqueEntityID('color-1'));

    await inMemoryColorRepository.create(newColor);

    await sut.execute({
      colorId: 'color-1',
    });

    expect(inMemoryColorRepository.items).toHaveLength(0);
  });
});
