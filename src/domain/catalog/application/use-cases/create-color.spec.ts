import { ColorRepository } from '../repositories/color-repository';
import { CreateColorUseCase } from './create-color';

const fakeColorRepository: ColorRepository = {
  create: async (product) => product,
};

test('create a product', async () => {
  const createColor = new CreateColorUseCase(fakeColorRepository);
  const response = await createColor.execute({
    name: 'red',
  });

  expect(response.color.id).toBeTruthy();
});
