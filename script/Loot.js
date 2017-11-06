class Loot {
  constructor(type, extraLoot) {

    switch(type) {
      case 1: //Health Up
        Player.health += 10;
        break;
      case 2: //Defense Up
        Player.defense += 0.025;
        break;
      case 3: //Luck up
        Player.luck += 0.025;
        break;
      case 4: //Attack Up
        Player.attack += 2;
        break;
      case 5: //Weapon
        let weapon = new Weapon();
        switch(weapon.type){
          case 1:
            Player.inventory.cutting = weapon;
            break;
          case 2:
            Player.inventory.blunt = weapon;
            break;
          case 3:
            Player.inventory.magic = weapon;
            break;
        }

        if (Player.wepaon.type == weapon.type){
          Player.wepaon = weapon;
        }

        if (extraLoot){
          handleLoot(false);
        }
        else {
            drawNextRoom();
            $("#nextRoom").one("click", () => {
              room = new Room();

              closeNextRoom();

              updateRoom();

              let character = findNextTurn();
              doTurn(character);
            });
        }
    }
  }
}
