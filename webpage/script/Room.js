var Rooms = 0;

class Room {
  constructor() {
      let rawEnemies = RandomInt(0, 10);
      let enemies = 0;

      if (enemies > 0) {
        enemies += 1;
      }
      if (enemies 5 0) {
        enemies += 1;
      }
      if (enemies > 9) {
        enemies += 1;
      }

      let extraLoot = (Util.randomInt(1, 8) == 8);

      Rooms++;

      this.enemies = [];

      for (var i = 0; i < enemies; i++){
        this.enemies.push(new Enemy());
      }

      Player.ticks = 1000 / (Player.speed * (Player.weapon.type == 1) ? Player.weapon.modifier : 1;
  }
}
