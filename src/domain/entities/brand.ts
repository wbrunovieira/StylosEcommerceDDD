import { randomUUID } from 'node:crypto';

interface BrandProps {
  name: string;
}

export class Brand {
  public id: string;
  public name: string;

  constructor(props: BrandProps, id?: string) {
    this.id = id ?? randomUUID();
    this.name = props.name;
  }
}
