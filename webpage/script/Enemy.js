class Enemy {
  constructor() {
    this.type = RandomInt(1, 3);

    this.health = 100 + (10 * Rooms);
    let attack = 2 * Rooms + 2;
    let defense = 0.1 + 0.025 * Rooms;
    let speed = 100 + 5 * Rooms;

    switch(this.type) {
      case 1: //Spider
        this.attack = attack;
        (defense > 2/3) ? this.defense = 0.6 : this.defense = defense * 0.9; //Cap at 60%
        this.speed = speed * 1.1;
        break;
      case 2: //Skeleton
        this.attack = attack * 0.9;
        (defense > 9/11) ? this.defense = 0.9 : this.defense = defense * 1.1; //Cap at 90%
        this.speed = speed;
        break;
      case 3: //Zombie
        this.attack = attack * 1.1;
        (defense > 0.75) ? this.defense = 0.75 : this.defense = defense; //cap at 75%
        this.speed = speed * 0.9;
        break;
    }

    this.ticks = 1000 / this.speed;
  }
}
