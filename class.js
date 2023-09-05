class Player {
  name;

  constructor(name) {
    this.name = name;
  }

  shoot() {
    console.log(`${this.name}이 슛 합니다 !`);
  }
}

class Hun extends Player {
  constructor(name) {
    super(name);
    this.name = name;
  }

  shoot() {
    super.shoot();
    console.log(`${this.name}이 골을 넣습니다!!!!!`);
  }
}

const hun = new Hun("jhun");
hun.shoot();
