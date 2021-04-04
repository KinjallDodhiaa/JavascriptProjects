class Pokemon {
  pokemonSkills = [];
  constructor(name, health, magic) {
    this.name = name;
    this.health = health;
    this.magic = magic;
  }

  learnAttackSkill(attackSkill) {
    this.pokemonSkills.push(attackSkill);
  }

  showStatus() {
    console.log(
      `${this.name} has ${this.health} health & ${this.magic} magic left. `
    );
  }
  //The attack method should call one of the Pokemon's attack and apply it to the other Pokemon

  attack(indexOfAttackSkills, pokemonToAttack) {
    var attackSkills = this.pokemonSkills[indexOfAttackSkills];
    if(!attackSkills){
      return ' no skill'
    }
    else if (this.magic < attackSkills.magicForAttack) {
      return `${this.name} does not have enough magic to damage other pokemon`;
    }
    else if (pokemonToAttack.health < 0) {
      return `${pokemonToAttack.name} is already dead.`;
    } else {
      this.magic -= attackSkills.magicForAttack;
      pokemonToAttack.health -= attackSkills.damageTheAttack;
      return `${this.name} launched ${attackSkills} skill successfully. Now ${pokemonToAttack.name} has ${pokemonToAttack.health} health & ${pokemonToAttack.magic} magic`;
    }
  }

  //Finally create a method called getMagic to help your pokemon add some magic back to your Pokemon (you can choose exactly how much magic should be
  //added back).
  getMagic(addMagic) {
    this.magic += addMagic;
  }
}

class AttackSkill {
  constructor(name, amountOfDamage, amountOfMagic) {
    this.name = name;
    this.damageTheAttack = amountOfDamage;
    this.magicForAttack = amountOfMagic;
  }
}

//----------------------------------------------------------------------------------------
let pikachu = new Pokemon("Pikachu", 120, 80);
let bulbasaur = new Pokemon("bulbasaur", 95, 105);
let venusaur = new Pokemon("Venusaur", 100, 75);
let ivysaur = new Pokemon("Ivysaur", 110, 110);
//-----------------------------------------------------------------------------------------
let dynamicPunch = new AttackSkill("Dynamic Punch", 40, 20);
let megaKick = new AttackSkill("Mega Kick", 50, 40);
let acid = new AttackSkill("Acid", 70, 60);
let babyDollEye = new AttackSkill("Baby DollEye", 30, 50);
//-----------------------------------------------------------------------------------------
pikachu.learnAttackSkill(dynamicPunch);
pikachu.learnAttackSkill(megaKick);
bulbasaur.learnAttackSkill(acid);
venusaur.learnAttackSkill(babyDollEye);

console.log(
  "-----------------------------------------------------------------------------"
);
//console.log(pikachu.attack(3, bulbasaur));
console.log(pikachu.attack(0, bulbasaur));
console.log(pikachu.attack(0, bulbasaur));
console.log(pikachu.attack(0, bulbasaur));
console.log(bulbasaur);
pikachu.getMagic(40);
console.log(pikachu);
console.log(bulbasaur);
