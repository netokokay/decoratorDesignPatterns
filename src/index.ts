
interface Sandwich {
  getDescription(): string;
  getCost(): number;
}

class ChickenSandwich implements Sandwich {
  getDescription(): string {
    return "Chicken Sandwich";
  }

  getCost(): number {
    return 4.5;
  }
}

abstract class FlavourDecorator implements Sandwich {
  protected sandwich: Sandwich;

  constructor(sandwich: Sandwich) {
    this.sandwich = sandwich;
  }

  getDescription(): string {
    return this.sandwich.getDescription();
  }

  getCost(): number {
    return this.sandwich.getCost();
  }
}

class Cheese extends FlavourDecorator {
  getDescription(): string {
    return this.sandwich.getDescription() + ", Cheese";
  }

  getCost(): number {
    return this.sandwich.getCost() + 2;
  }
}

class Pepperoni extends FlavourDecorator {
  getDescription(): string {
    return this.sandwich.getDescription() + ", Pepperoni";
  }

  getCost(): number {
    return this.sandwich.getCost() + 0.99;
  }
}

const runExercise = () => {
  let sandwich = new ChickenSandwich();
  sandwich = new Cheese(sandwich);
  sandwich = new Pepperoni(sandwich);

  console.log(sandwich.getDescription());
  console.log(sandwich.getCost());
};

runExercise();