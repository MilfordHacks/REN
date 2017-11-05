var room;

function findNextTurn() {
  let lowest = {
    "ticks": Player.ticks,
    "character": Player
  };

  for (var i = 0; i < room.enemies.length; i++){
    let enemy = room.enemies[i];

    if (enemy.ticks < lowest.ticks){
      lowest.ticks = enemy.ticks;
      lowest.character = enemy;
    }
  }

  return lowest.character;
}

function doTurn(character) {
  if (character instanceof Enemy){
    let damage = character.attack;
    var critChance = Random(0, 1);

    if (critChance <= character.luck){
      damage *= 2;
    }

    Player.health = damage - (damage * Player.defense);

    Player.ticks -= character.ticks;
    for (var i = 0; i < room.enemies.length; i++){
      let enemy = room.enemies[i];

      enemy.ticks -= character.ticks;
    }

    character.ticks = 1000 / character.speed;

    animateEnemy(room.enemies.indexOf(character));

    updatePlayer();

    var nextCharacter = findNextTurn();
    setTimeout(doTurn, 1000, nextCharacter);
  }
  else {
    if (room.enemies > 0) {
      $("#enemy1").one("click",attackFirst);
    }
    if (room.enemies > 1) {
      $("#enemy2").one("click",attackSecond);
    }
    if (room.enemies > 2) {
      $("#enemy3").one("click",attackThird);
    }
  }
}

function attackFirst() {
  $("#enemy2").off("click", attackSecond);
  $("#enemy3").off("click", attackThird);
  attackCharacter(room.enemies[0]);
}

function attackSecond() {
  $("#enemy1").off("click", attackFirst);
  $("#enemy3").off("click", attackThird);
  attackCharacter(room.enemies[1]);
}

function attackThird() {
  $("#enemy1").off("click", attackFirst);
  $("#enemy2").off("click", attackSecond);
  attackCharacter(room.enemies[2]);
}

function attackCharacter(character){
  let damage = Player.attack + (Player.weapon.type == 2) ? Player.weapon.modifier * 2: 0;

  let critChance = Random(0, 1);
  let luck = Player.luck + (Player.weapon.type == 3) ? Player.weapon.modfier * 0.025 : 0;
  luck = (luck > 1) ? 1 : luck;

  if (luck <= critChance) {
    damage *= 2;
  }

  character.health -= damage - (damage * character.defense);

  if (character.health <= 0) {
    room.enemies = room.enemies.filter(function(item) {return item != character;} );
  }

  Player.ticks = 1000 / (Player.speed + (Player.weapon.type == 1) ? Player.weapon.modifier * 5 : 0);

  for (var i = 0; i < enemies; i++){
    let enemy = room.enemies[i];

    enemy.ticks -= character.ticks;
  }

  animatePlayer()

  updateEnemies();

  if (room.enemies.length == 0){
    handleLoot(room.extraLoot);
  }
else {
  var nextCharacter = findNextTurn();
  setTimeout(doTurn, 0, nextCharacter);
  }
}



$("#invBtn").one("click", openInventory);

function openInventory(){
  drawInventory();

  $("#magic").one("click",() => {
    Player.weapon = Player.inventory.magic;
    $("#invBtn").click();
  });
  $("#cutting").one("click",() => {
    Player.weapon = Player.inventory.cutting;
    $("#invBtn").click();
  });
  $("#blunt").one("click",() => {
    Player.weapon = Player.inventory.blunt;
    $("#invBtn").click();
  });

  $("#invBtn").one("click",() => {
    $("magic").off();
    $("cutting").off();
    $("blunt").off();
    closeInventory();
  });
}

function startUp(){
  resetPlayer();

  room = new Room();

  updateRoom();

  let character = findNextTurn();
  doTurn(character);
}

function death(){
  drawDeath();
  $("#restart").one("click",() => {
    Rooms = 0;

    closeDeath();

    startUp();
  });
}

function handleLoot(extra){
  drawLoot();

  $("#loot1").one("click", () => {
    $("#loot2").off();
    $("#loot3").off();
    $("#loot4").off();
    $("#loot5").off();
    closeLoot();
    new Loot(1, extra);
  });
  $("#loot2").one("click", () => {
    $("#loot1").off();
    $("#loot3").off();
    $("#loot4").off();
    $("#loot5").off();
    closeLoot();
    new Loot(2, extra);
  });
  $("#loot3").one("click", () => {
    $("#loot1").off();
    $("#loot2").off();
    $("#loot4").off();
    $("#loot5").off();
    closeLoot();
    new Loot(3, extra);
  });
  $("#loot4").one("click", () => {
    $("#loot1").off();
    $("#loot2").off();
    $("#loot3").off();
    $("#loot5").off();
    closeLoot();
    new Loot(4, extra);
  });
  $("#loot5").one("click", () => {
    $("#loot1").off();
    $("#loot2").off();
    $("#loot3").off();
    $("#loot4").off();
    closeLoot();
    new Loot(5, extra);
  });
}

startUp();
