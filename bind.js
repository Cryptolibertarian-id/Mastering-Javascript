const fireAttack = {
  name: "Fire Attack",
  damage: 1000,
};

const waterAttack = {
  name: "Water Attack",
  damage: 700,
};

function magician() {
  console.log(this.name);
  console.log(this.damage);
}

const attack = magician.bind(fireAttack);
console.log(typeof attack); //function

attack();
