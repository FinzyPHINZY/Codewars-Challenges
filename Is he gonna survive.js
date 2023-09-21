function hero(bullets, dragons) {
  //Get Coding!
  //to kill a dragon = 2 bullets.
  const shots = dragons * 2;
  if (bullets >= shots) {
    return true;
  } else {
    return false;
  }
}
