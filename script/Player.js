var Player;

function resetPlayer() {
  Player = {
    "health": 100,
    "speed": 100,
    "attack": RandomInt(10, 20),
    "defense": 0.1,
    "luck": 0.1,
    "inventory": {
      "cutting": {
        "type": 1,
        "modifier": 1
      },
      "blunt": {
        "type": 2,
        "modifier": 1
      },
      "magic": {
        "type": 3,
        "modifier": 1
      }
    },
    "weapon": {
      "type": 1,
      "modifier": 1
    }
  };
}
