class Hero {
    constructor(name, age, type) {
      this.name = name;
      this.age = age;
      this.type = type
    }
     toAttack() {
  let attack = "";
             if (this.type === "Mage") {
          attack = "magic";
            } else if (this.type === "Warrior") {
          attack = "sword";
            } else if (this.type === "Monk") {
          attack = "martial arts";
            } else if (this.type === "Ninja") {
          attack = "shuriken";
            }
             console.log(`The ${this.type} attacked using ${attack}`);
      }
  }
  let champOne = new Hero ("Jaina", 36, "Mage");
  let champTwo = new Hero ("Orick", 42, "Warrior");
  let champThree = new Hero ("Lun", 109, "Monk");
  let champFour = new Hero ("hushio", 24, "Ninja");
  champOne.toAttack();
  champTwo.toAttack();
  champThree.toAttack();
  champFour.toAttack();
  