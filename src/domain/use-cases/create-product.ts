interface CreateProductUseCaseRequest {
  ProductId: string;
  name: string;
  description: string;
  color: string;
  size: string;
  material: string;
  brand: string;
  price: string;
  stock: number;
}

export class CreateProductUseCase {
  execute({
    ProductId,
    name,
    description,
    color,
    size,
    material,
    brand,
    price,
    stock,
  }: CreateProductUseCaseRequest) {
    return {
      ProductId,
      name,
      description,
      color,
      size,
      material,
      brand,
      price,
      stock,
    };
  }
}

new CreateProductUseCase().execute({
  ProductId: '1',
  name: 'name',
  description: 'description',
  color: 'color',
  size: 'size',
  material: 'material',
  brand: 'brand',
  price: 'price',
  stock: 1,
});
