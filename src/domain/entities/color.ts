import { randomUUID } from 'node:crypto';

interface ColorProps {
  name: string;
}

export class Color {
  public id: string;
  public name: string;

  constructor(props: ColorProps, id?: string) {
    this.id = id ?? randomUUID();
    this.name = props.name;
  }
}
