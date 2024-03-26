export class Slug {
  public value: string;

  private constructor(value: string) {
    this.value = value;
  }

  static create(value: string) {
    return new Slug(value);
  }

  /**
   * Receives a string and normalize it as a slug.
   *
   * Example: "An example title" => "an-example-title"
   *
   * @param text {string}
   */
  static createFromText(text: string): Slug {
    const slugText = text
      .normalize('NFKD')
      .toLowerCase()
      .trim()
      .replace(/\s+/g, '-') //remove white space
      .replace(/[^\w-]+/g, '') //remove special characters
      .replace(/_/g, '-') //replace underscore with hyphen
      .replace(/--+/g, '-') //replace multiple hyphens with single hyphen
      .replace(/-$/g, ''); //remove hyphen at the end

    return new Slug(slugText);
  }
}
