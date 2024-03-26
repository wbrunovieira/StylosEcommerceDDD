import { Slug } from './value-objects/slug';
import { Entity } from '../../core/entities/entity';
import { UniqueEntityID } from '../../core/entities/unique-entity-id';
import { Optional } from '../../core/types/optional';

import dayjs from 'dayjs';

interface ProductProps {
  name: string;
  description: string;
  colorId: UniqueEntityID[];
  sizeId: UniqueEntityID[];
  materialId: UniqueEntityID;
  brandID: UniqueEntityID;
  price: number;
  stock: number;
  slug: Slug;
  createdAt: Date;
  updatedAt: Date;
}

export class Product extends Entity<ProductProps> {
  private touch() {
    this.props.updatedAt = new Date();
  }
  get name() {
    return this.props.name;
  }

  get description() {
    return this.props.description;
  }

  get brandId() {
    return this.props.brandID;
  }

  get materialId() {
    return this.props.materialId;
  }

  get sizeId() {
    return this.props.sizeId;
  }

  get colorId() {
    return this.props.colorId;
  }

  get price() {
    return this.props.price;
  }

  get stock() {
    return this.props.stock;
  }

  get slug() {
    return this.props.slug;
  }

  get createdAt() {
    return this.props.createdAt;
  }

  get updatedAt() {
    return this.props.updatedAt;
  }

  get isNew(): boolean {
    return dayjs().diff(this.createdAt, 'days') <= 30;
  }

  get excerpt() {
    return this.description.substring(0, 120).trimEnd().concat('...');
  }

  set name(name: string) {
    this.props.name = name;
    this.props.slug = Slug.createFromText(name);

    this.touch();
  }

  static create(
    props: Optional<ProductProps, 'createdAt' | 'slug' | 'updatedAt'>,
    id?: UniqueEntityID
  ): Product {
    const now = new Date();
    const product = new Product(
      {
        ...props,
        createdAt: props.createdAt || now,
        updatedAt: props.updatedAt || now,
        slug: props.slug ?? Slug.createFromText(props.name),
      },
      id
    );
    return product;
  }
}