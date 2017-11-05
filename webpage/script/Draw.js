function drawNextRoom(){
  $("#nextRoom").show();
}

function closeNextRoom(){
  $("#nextRoom").hide();
}

function drawInventory(){
  $("#Inventory").show();
}

function closeInventory(){
  $("#Inventory").hide();
}

function drawDeath(){
  $("#restart").show();

}

function closeDeath(){
  $("#restart").hide();
}

function drawLoot(){
  $("#Loot").show();
}

function closeLoot(){
  $("#Loot").hide();
}

function updateRoom(){
  updatePlayer();
  $("#roomNum").val("Room#: " + rooms);
  updateEnemies();
}
function updatePlayer () {
  $("#atk").val("Atk: " + Player.attack);
  $("#spd").val("Spd: " + Player.speed);
  $("#def").val("Def: " + Player.defense);
  $("#luk").val("Luk: " + Player.luck);
  $("#hp").val("HP: " + Player.health);
  for (var i = 0; i<3; i++) {
    $("#weapon"+(i+1)).hide();
  }
  $("#weapon"+Player.weapon.type).show();
}
function updateEnemies () {
  for (var i = 0; i<3; i++) {
    $("#sk"+(i+1)).hide();
    $("#zb"+(i+1)).hide();
    $("#sp"+(i+1)).hide();
    $("#hp"+(i+1)).hide();
  }
  for (var i = 0; i < room.enemies.length; i++) {
    var enemy = room.enemies[i]
    switch (enemy.type) {
      case 1:
        $("#sp"+(i+1)).show();
        break;
      case 2:
        $("#sk"+(i+1)).show();
        break;
      case 3:
        $("#zb"+(i+1)).show();
      break;
    }
    $("#hp"+(i+1)).show();
    $("#hp"+(i+1)).val("HP: " + enemy.health);
  }
}
function animateEnemy () {}
function animatePlayer () {}
