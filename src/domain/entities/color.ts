import { randomUUID } from 'node:crypto';
import { Entity } from '../../core/entities/entity';

interface ColorProps {
  name: string;
}

export class Color extends Entity<ColorProps> {}
