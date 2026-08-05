/*Create an object called student with the following properties:
name
age
course
college*/
let student = {
  name: "Ajaya",
  age: 10,
  course: "FSJD",
  college: "GATE",
};

// Print the complete object.
console.log(student);

// Print only the name property.
console.log(student["name"]);

//Print the age using dot notation.
console.log(student.age);

//Print the course using bracket notation.
console.log(student["course"]);

//Change the student's age.
student.age = 22;
console.log(student);

//Change the student's course.
student.course = "Full Stack Java Development";
console.log(student["course"]);

//Add a new property called city.
student.city = "Hyderabad";
console.log(student);

//Delete the college property.
delete student.college;
console.log(student);

//Check whether the object contains a name property.
if ("name" in student) {
  console.log("Has Name Proporty");
}

/*Create an object car with:
brand
model
year
price
Print each property.*/
let car = {
  brand: "Toyota",
  model: "Camry",
  Year: 2024,
};
for (const key in car) {
  console.log(key);
}

/*Add a method called display() that prints:
Brand: Toyota
Model: Camry
Year: 2024*/
car.display = function () {
  const keys = Object.keys(this);
  for (let i = 0; i < keys.length - 1; i++) {
    const key = keys[i];
    const capitalized = key.charAt(0).toUpperCase() + key.slice(1);
    console.log(`${capitalized}: ${this[key]}`);
  }
};

car.display();

/*Create a person object with a greet() method.
Expected output:
Hello, my name is Rahul*/
let person = {
  name: "rahul",
  greet: function () {
    console.log(`Hello, My name is ${this.name}`);
  },
};
person.greet();

/*Create a calculator object with methods:
add()
subtract()
multiply()
divide()*/
let calculator = {
  add: function (num1, num2 = 0) {
    console.log(`Addition of 2 number = ${num1 + num2}`);
  },
  sub: function (num1, num2 = 0) {
    console.log(`Sub of 2 number = ${num1 - num2}`);
  },
  mul: function (num1, num2 = 0) {
    console.log(`Mul of 2 number = ${num1 * num2}`);
  },
  div: function (num1, num2 = 0) {
    console.log(`Div of 2 number = ${num1 / num2}`);
  },
};
calculator.add(2, 4);
calculator.sub(2, 4);
calculator.mul(2, 4);
calculator.div(2, 4);

/*Create a rectangle object with:
length
width
area()
perimeter()*/
let rectangle = {
  length: 4,
  width: 8,
  area: function () {
    console.log(`Area of reactangle is ${this.length * this.width}`);
  },
  perimeter: function () {
    console.log(`Perimeter of reactangle is ${2 * (this.length + this.width)}`);
  },
};
rectangle.area();
rectangle.perimeter();

//Print all keys of an object using for...in.
for (const key in car) {
  console.log(key);
}

// Print all values using for...in.
for (const key in car) {
  if (typeof car[key] !== "function") {
    console.log(`${car[key]}`);
  }
}

// Print both keys and values:
for (const key in car) {
  if (typeof car[key] !== "function") {
    console.log(`${key}:${car[key]}`);
  }
}

// Count the number of properties in an object.
let proportyCount = 0;
for (const key in car) {
  if (typeof car[key] !== "function") {
    proportyCount++;
  }
}
console.log(proportyCount);

// Find the sum of all numeric values.
// Example:

let marks = {
  math: 80,
  java: 75,
  python: 90,
  dbms: 85,
};
let sum = 0;
for (const key in marks) {
  sum += marks[key];
}
console.log(sum)