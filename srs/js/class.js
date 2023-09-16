class Character {
    constructor(name, type) {
      const types = [
        'Bowman',
        'Swordsman',
        'Magician',
        'Undead',
        'Zombie',
        'Daemon',
      ];
  
      if (name.length < 2 || name.length > 10) {
        throw new Error('Invalid name length');
      }
      if (!types.includes(type)) {
        throw new Error('Invalid character type');
      }
  
      this.name = name;
      this.type = type;
      this.health = 100;
      this.level = 1;
      this.attack = undefined;
      this.defence = undefined;
    }
}

class Bowman extends Character {
    constructor (name, type = 'Bowman') {
        this.attack = 25;
        this.defence = 25;
    }
}

class Swordsman extends Character {
    constructor (name, type) {
        this.attack = 40;
        this.defence = 10;
    }
}

class Magician extends Character {
    constructor (name, type) {
        this.attack = 40;
        this.defence = 10;
    }
}

class Daemon extends Character {
    constructor (name, type) {
        this.attack = 10;
        this.defence = 40;
    }
}

class Undead extends Character {
    constructor (name, type) {
        this.attack = 25;
        this.defence = 25;
    }
}

class Zombie extends Character {
    constructor (name, type) {
        super.this.attack = 40;
        super.this.defence = 10;
    }
}