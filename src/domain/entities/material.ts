import { Entity } from '../../core/entities/entity';

interface MaterialProps {
  name: string;
}

export class Material extends Entity<MaterialProps> {}
