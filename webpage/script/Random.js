function Random(min, max) {
  let rand = Math.random() * (max - min)

  return rand + min;
}

function RandomInt(min, max) {
  let rand = Random(min, max);

  return Math.round(rand);
}
