import { Entity } from '@/core/entities/entity';
import { UniqueEntityID } from '@/core/entities/unique-entity-id';
import { Optional } from '@/core/types/optional';

interface ColorProps {
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

export class Color extends Entity<ColorProps> {
  get name(): string {
    return this.props.name;
  }

  get createdAt(): Date {
    return this.props.createdAt;
  }

  get updatedAt(): Date {
    return this.props.updatedAt;
  }

  static create(
    props: Optional<ColorProps, 'createdAt' | 'updatedAt'>,
    id?: UniqueEntityID
  ) {
    const color = new Color(
      {
        ...props,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      id
    );

    return color;
  }
}
