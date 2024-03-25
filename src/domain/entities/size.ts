import { randomUUID } from 'node:crypto';

interface SizeProps {
  name: string;
}

export class Size {
  public id: string;
  public name: string;

  constructor(props: SizeProps, id?: string) {
    this.id = id ?? randomUUID();
    this.name = props.name;
  }
}
