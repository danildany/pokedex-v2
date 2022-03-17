export class Pokemon {
  constructor(id, name, types = [], sprites = {}, height, weight) {
    this.id = id;
    this.name = name;
    this.types = types;
    this.sprites = sprites;
    this.height = height;
    this.weight = weight;
  }
}
