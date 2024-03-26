import { Entity } from '../../core/entities/entity';

interface BrandProps {
  name: string;
}

export class Brand extends Entity<BrandProps> {}
