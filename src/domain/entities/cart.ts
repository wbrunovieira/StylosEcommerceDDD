import { Entity } from '../../core/entities/entity';
import { UniqueEntityID } from '../../core/entities/unique-entity-id';

interface CartProps {
  productsId: UniqueEntityID[];
  total: number;
  userId: UniqueEntityID;
}

export class Cart extends Entity<CartProps> {}
