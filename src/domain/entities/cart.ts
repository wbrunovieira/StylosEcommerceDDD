import { randomUUID } from 'node:crypto';
import { Product } from './product';
import { Entity } from '../../core/entities/entity';

interface CartProps {
  products: Product[];
  total: number;
  userId: string;
}

export class Cart extends Entity<CartProps> {}
