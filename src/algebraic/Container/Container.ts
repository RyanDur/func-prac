export class Container {
  private $value: any;

  constructor(x) {
    this.$value = x;
  }

  static of = (x: any) => new Container(x);
}
