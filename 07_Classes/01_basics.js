class Person {
  constructor(name, yearOfBirth) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
  }

  calculateAge() {
    console.log(`${this.name} is ` + (2019 - this.yearOfBirth));
  }
}

//Inheritance
class Patient extends Person {
  constructor(condition, name, yearOfBirth) {
    super();
    this.condition = condition;
    this.name = name;
    this.yearOfBirth = yearOfBirth;
  }
  getAge() {
    super.calculateAge();
  }

  getCondition() {
    console.log(`Patient: ${this.name} has recovered from ${this.condition}`);
  }
}

const man = new Patient("Malaria", "Lambert", 1940);
man.getAge();
man.getCondition();
