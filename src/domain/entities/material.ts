import { randomUUID } from 'node:crypto';

interface MaterialProps {
  name: string;
}

export class Material {
  public id: string;
  public name: string;

  constructor(props: MaterialProps, id?: string) {
    this.id = id ?? randomUUID();
    this.name = props.name;
  }
}
