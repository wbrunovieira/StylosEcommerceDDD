import { randomUUID } from 'node:crypto';
import { Entity } from '../../core/entities/entity';

interface UserProps {
  name: string;
  email: string;
  password: string;
}

export class User extends Entity<UserProps> {}
