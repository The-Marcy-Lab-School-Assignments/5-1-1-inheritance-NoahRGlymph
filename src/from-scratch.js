class Quadrilateral {
  constructor(side1, side2, side3, side4) {
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
    this.side4 = side4;
  }

  getPerimeter() {
    return this.side1 + this.side2 + this.side3 + this.side4;
  }

  getArea() {
    throw new Error('Method not implemented. Area calculation depends on the type of quadrilateral.');
  }
}

class Rectangle extends Quadrilateral {
  constructor(width, height) {
    super(width, height, width, height);
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

class Square extends Rectangle {
  constructor(side) {
    super(side, side);
    this.side = side;
  }

  getPerimeter() {
    return this.side * 4;
  }

  getArea() {
    return this.side * this.side;
  }

  getDiagonal() {
    return Math.sqrt(2) * this.side;
  }
}

module.exports = { Quadrilateral, Rectangle, Square };


const { Quadrilateral, Rectangle } = require('./Quadrilateral');

class Square extends Rectangle {
  constructor(side) {
    // Call the parent class constructor with the side length for all four sides
    super(side, side);
    this.side = side;
  }

  // Method to calculate the perimeter of the square
  getPerimeter() {
    return this.side * 4;
  }

  // Method to calculate the area of the square
  getArea() {
    return this.side * this.side;
  }

  // Method to calculate the diagonal of the square
  getDiagonal() {
    return Math.sqrt(2) * this.side;
  }
}

/* Be creative with this one! */
class Person {
  // Private variable to track instances
  static #instances = [];

  constructor(name, age, hobbies) {
    this.name = name;
    this.age = age;
    this.hobbies = hobbies;
    this.id = Person.#instances.length + 1; // Assign a unique ID to each person

    // Track each new instance
    Person.#instances.push(this);
  }

  // Instance method to display a greeting
  greet() {
    console.log(`Hello, my name is ${this.name}.`);
  }

  // Instance method to calculate years until retirement (assuming retirement age is 65)
  yearsUntilRetirement() {
    const retirementAge = 65;
    const yearsLeft = retirementAge - this.age;
    return yearsLeft > 0 ? yearsLeft : 0;
  }

  // Instance method to add a new hobby
  addHobby(newHobby) {
    this.hobbies.push(newHobby);
  }

  // Class method to list all instances
  static list() {
    return this.#instances;
  }

  // Class method to find a person by name
  static findByName(name) {
    return this.#instances.find(person => person.name === name);
  }
}

module.exports = {
  Quadrilateral,
  Rectangle,
  Square,
  Person,
};
