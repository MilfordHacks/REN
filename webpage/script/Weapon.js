class Weapon {
  constructor() {
    this.type = Util.randomInt(1, 9);
    /*
      1 = Cutting
      2 = Blunt
      3 = Magic
    */
    this.modifier = Rooms;
  }
}
