# ES6 Features

ES6 (ECMAScript 2015) introduced many new, cleaner features to JavaScript.

## ES6 Features Overview

Here is the quick list you will learn in this guide:

- `let` and `const`
- Template literals
- Default parameters
- Arrow functions
- Destructuring
- Spread operator `...`
- Rest parameter `...`
- `for...of`
- Enhanced object literals
- Classes
- Modules
- `Map` and `Set`

> 💡 **Practice Tip:** Don't just read — open your browser console (F12) or a Node.js terminal and try each exercise yourself!

---

## Level 1: `let`, `const` and Template Literals

### 1. Create a variable using `let` and change its value.

```javascript
let age = 20;
age = 21;      // allowed — let values can change
console.log(age); // 21
```

### 2. Create a constant using `const` and try changing its value. Observe the error.

```javascript
const pi = 3.14;
pi = 3.14159; // ❌ ERROR: Assignment to constant variable.
```

> `let` can change, `const` cannot. Use `const` by default, `let` only when you need to reassign.

### 3. Print your name and age using a **template literal**

```javascript
let name = "Ajaya";
let age = 23;

console.log(`My name is ${name} and I am ${age} years old.`);
```

**Expected output:**
```
My name is Ajaya and I am 23 years old.
```

### 4. Product billing using template literals

```javascript
let productName = "Laptop";
let price = 50000;
let quantity = 2;
let total = price * quantity;

console.log(`Product: ${productName}`);
console.log(`Price: ₹${price}`);
console.log(`Quantity: ${quantity}`);
console.log(`Total: ₹${total}`);
```

**Expected output:**
```
Product: Laptop
Price: ₹50000
Quantity: 2
Total: ₹100000
```

---

## Level 2: Default Parameters

> Default parameters let a function use a **fallback value** when you call it without passing an argument.

### 5. Greeting function with a default value

```javascript
function greet(name = "Guest") {
    return `Hello ${name}`;
}

console.log(greet("Ajaya")); // Hello Ajaya
console.log(greet());        // Hello Guest
```

### 6. Price calculator with default quantity

```javascript
function calculatePrice(price, quantity = 1) {
    return price * quantity;
}

console.log(calculatePrice(500));   // 500  (quantity defaults to 1)
console.log(calculatePrice(500, 3)); // 1500
```

### 7. Power function with default exponent

```javascript
function power(number, exponent = 2) {
    return number ** exponent;
}

console.log(power(5));     // 25
console.log(power(5, 3));  // 125
```

---

## Level 3: Arrow Functions

> Arrow functions are a **shorter** way to write functions. They use `=>` instead of the `function` keyword.

### 8. Convert a normal function into an arrow function

```javascript
// Normal function
function add(a, b) {
    return a + b;
}

// Arrow function
const add = (a, b) => a + b;

console.log(add(5, 3)); // 8
```

### 9. Find the square of a number

```javascript
const square = (n) => n * n;
console.log(square(7)); // 49
```

### 10. Check whether a number is even

```javascript
const isEven = (n) => n % 2 === 0;
console.log(isEven(10)); // true
console.log(isEven(7));  // false
```

### 11. Find the largest of two numbers

```javascript
const maxOfTwo = (a, b) => (a > b ? a : b);
console.log(maxOfTwo(14, 9)); // 14
```

### 12. Calculate the area of a circle

```javascript
const circleArea = (radius) => 3.14159 * radius ** 2;
console.log(circleArea(5)); // 78.53975
```

### 13. Convert a greeting function into an arrow function

```javascript
// Before
function greet(name) {
    return `Hello ${name}`;
}

// After
const greet = (name) => `Hello ${name}`;
```

---

## Level 4: Destructuring

> Destructuring is a shortcut to **pull values out** of arrays and objects into separate variables.

### Array Destructuring

#### 14. Extract the first two values

```javascript
let numbers = [10, 20, 30, 40, 50];
let [first, second] = numbers;

console.log(first);  // 10
console.log(second); // 20
```

#### 15. Extract the first and third values

```javascript
let numbers = [10, 20, 30, 40, 50];
let [first, , third] = numbers;   // note the empty slot to skip the second value

console.log(first); // 10
console.log(third); // 30
```

#### 16. Swap two variables using array destructuring

```javascript
let a = 10;
let b = 20;

[a, b] = [b, a]; // swap!

console.log(a); // 20
console.log(b); // 10
```

### Object Destructuring

#### 17. Extract `name` and `course` from a student object

```javascript
let student = {
    name: "Ajaya",
    age: 23,
    course: "MCA"
};

let { name, course } = student;
console.log(name);   // Ajaya
console.log(course); // MCA
```

#### 18. Give a different variable name while extracting

```javascript
let { name: studentName } = student;
console.log(studentName); // Ajaya
```

#### 19. Use object destructuring inside a function

```javascript
function display({ name, age }) {
    console.log(`${name} is ${age} years old.`);
}

display(student); // Ajaya is 23 years old.
```

---

## Level 5: Spread Operator

> The spread operator `...` **spreads** (copies) the elements of an array or object into another one.

### 20. Merge two arrays

```javascript
let a = [1, 2, 3];
let b = [4, 5, 6];

let merged = [...a, ...b];
console.log(merged); // [1, 2, 3, 4, 5, 6]
```

### 21. Copy an array

```javascript
let original = [10, 20, 30];
let copy = [...original];

console.log(copy); // [10, 20, 30]
```

### 22. Add new elements while copying

```javascript
let numbers = [20, 30, 40];
let newNumbers = [10, ...numbers, 50];

console.log(newNumbers); // [10, 20, 30, 40, 50]
```

### 23. Merge two objects

```javascript
let student = {
    name: "Ajaya",
    age: 23
};

let course = {
    name: "Full Stack Java",
    duration: "6 months"
};

let combined = { ...student, ...course };
console.log(combined);
```

> ⚠️ **Note:** When keys overlap, the **later object wins**. Here `name` will be `"Full Stack Java"`.

### 24. Copy an object and add a new property

```javascript
let person = { name: "Ajaya", age: 23 };
let updatedPerson = { ...person, city: "Bhubaneswar" };

console.log(updatedPerson);
// { name: "Ajaya", age: 23, city: "Bhubaneswar" }
```

---

## Level 6: Rest Parameter

> The rest parameter `...` collects **any number of arguments** into an array. It is the *opposite* of spread — spread *splits out*, rest *gathers in*.

### 25. Sum of any number of numbers

```javascript
function sum(...numbers) {
    return numbers.reduce((total, n) => total + n, 0);
}

console.log(sum(10, 20, 30));        // 60
console.log(sum(10, 20, 30, 40, 50)); // 150
```

### 26. Find the largest number using rest

```javascript
function findMax(...numbers) {
    return Math.max(...numbers);
}

console.log(findMax(12, 45, 3, 78, 34)); // 78
```

### 27. Student name + any number of marks, then calculate average

```javascript
function calculateAverage(name, ...marks) {
    let total = marks.reduce((sum, m) => sum + m, 0);
    let average = total / marks.length;
    return `${name}'s average: ${average}`;
}

console.log(calculateAverage("Ajaya", 80, 75, 90, 85));
```

**Expected output:**
```
Ajaya's average: 82.5
```

---

## Level 7: `for...of`

> `for...of` is a clean way to **loop over each item** of an array, string, Set, or Map.

### 28. Print every element of an array

```javascript
let languages = ["Java", "Python", "JavaScript", "C++"];

for (let lang of languages) {
    console.log(lang);
}
```

### 29. Find the sum of an array

```javascript
let numbers = [10, 20, 30, 40, 50];
let sum = 0;

for (let num of numbers) {
    sum += num;
}

console.log(sum); // 150
```

### 30. Print only even numbers

```javascript
let numbers = [11, 22, 33, 44, 55];

for (let num of numbers) {
    if (num % 2 === 0) {
        console.log(num); // 22, 44
    }
}
```

### 31. Iterate over a string

```javascript
let word = "JavaScript";

for (let char of word) {
    console.log(char); // J, a, v, a, S, c, r, i, p, t
}
```

---

## Level 8: Enhanced Object Literals

### 32. Property shorthand

> When the variable name is the **same** as the property name, you can write it only once.

```javascript
let name = "Ajaya";
let age = 23;
let course = "MCA";

let student = { name, age, course };
// This is shorthand for { name: name, age: age, course: course }
```

### 33. Object with methods using enhanced syntax

> You can write methods inside objects without the `function` keyword and `:`.

```javascript
let calculator = {
    add(a, b) {
        return a + b;
    },
    subtract(a, b) {
        return a - b;
    },
    multiply(a, b) {
        return a * b;
    },
    divide(a, b) {
        return b !== 0 ? a / b : "Cannot divide by zero";
    }
};

console.log(calculator.add(10, 5));       // 15
console.log(calculator.subtract(10, 5));  // 5
console.log(calculator.multiply(10, 5));  // 50
console.log(calculator.divide(10, 5));    // 2
```

---

## Level 9: Set

> A `Set` is a collection that stores **only unique values**. Duplicates are automatically removed.

### 34. Remove duplicate values from an array

```javascript
let numbers = [1, 2, 2, 3, 4, 4, 5, 5];
let unique = new Set(numbers);

console.log([...unique]); // [1, 2, 3, 4, 5]
```

### 35. Create a Set and add five values

```javascript
let fruits = new Set();
fruits.add("Apple");
fruits.add("Banana");
fruits.add("Mango");
fruits.add("Orange");
fruits.add("Grapes");

console.log(fruits);
```

### 36. Check whether a value exists using `.has()`

```javascript
console.log(fruits.has("Mango"));  // true
console.log(fruits.has("Cherry")); // false
```

### 37. Remove a value using `.delete()`

```javascript
fruits.delete("Banana");
console.log(fruits.has("Banana")); // false
```

### 38. Find the number of unique values in an array

```javascript
let numbers = [3, 1, 3, 2, 1, 2, 3, 5];
let uniqueCount = new Set(numbers).size;

console.log(uniqueCount); // 4
```

---

## Level 10: Map

> A `Map` stores data as **key-value pairs**. Unlike plain objects, keys can be any type (numbers, strings, objects).

### 39. Create a Map

```javascript
let student = new Map([
    ["name", "Ajaya"],
    ["age", 23],
    ["course", "MCA"]
]);
```

### 40. Get each value from the Map

```javascript
console.log(student.get("name"));   // Ajaya
console.log(student.get("age"));    // 23
console.log(student.get("course")); // MCA
```

### 41. Add a new key/value pair

```javascript
student.set("city", "Bhubaneswar");
console.log(student.get("city")); // Bhubaneswar
```

### 42. Delete a key

```javascript
student.delete("course");
console.log(student.has("course")); // false
```

### 43. Check whether a key exists

```javascript
console.log(student.has("name")); // true
console.log(student.has("marks")); // false
```

### 44. Iterate through a Map using `for...of`

```javascript
for (let [key, value] of student) {
    console.log(`${key}: ${value}`);
}
```

---

## Interview-Level ES6 Practice

> These are common interview questions. Try solving them **before** looking at the hints.

### 45. Remove duplicates — `Spread + Set`

```javascript
let numbers = [10, 20, 10, 30, 20, 40, 30];

let unique = [...new Set(numbers)];
console.log(unique); // [10, 20, 30, 40]
```

### 46. Find maximum — `Spread + Math.max()`

```javascript
let numbers = [25, 78, 12, 90, 45];

let max = Math.max(...numbers);
console.log(max); // 90
```

### 47. Merge student information — `Spread`

```javascript
let personal = {
    name: "Ajaya",
    age: 23
};

let academic = {
    course: "MCA",
    percentage: 78
};

let student = { ...personal, ...academic };
console.log(student);
// { name: "Ajaya", age: 23, course: "MCA", percentage: 78 }
```

### 48. Destructure an array of objects — `Destructuring + for...of`

```javascript
let students = [
    { name: "Rahul", marks: 80 },
    { name: "Priya", marks: 90 },
    { name: "Amit", marks: 75 }
];

for (let { name, marks } of students) {
    console.log(`${name} → ${marks}`);
}
```

**Expected output:**
```
Rahul → 80
Priya → 90
Amit → 75
```

---

## Mini Challenge: Student Result System

> 🎯 Build this yourself! Use the ES6 skills you learned above.

```javascript
let students = [
    { name: "Ajaya", marks: 85 },
    { name: "Rahul", marks: 72 },
    { name: "Priya", marks: 91 },
    { name: "Amit", marks: 68 }
];
```

Your program should:

1. Print every student's name and marks.
2. Find the highest scorer.
3. Find the lowest scorer.
4. Calculate the average marks.
5. Create a new array containing only students who scored `>= 75`.
6. Remove duplicate students if any.
7. Use **arrow functions** where appropriate.
8. Use **destructuring**.
9. Use **spread/rest** where appropriate.
10. Use `for...of` for iteration.

### Sample Solution

<details>
<summary>Click to reveal the solution (try it yourself first!)</summary>

```javascript
let students = [
    { name: "Ajaya", marks: 85 },
    { name: "Rahul", marks: 72 },
    { name: "Priya", marks: 91 },
    { name: "Amit", marks: 68 }
];

// 1. Print every student's name and marks
for (let { name, marks } of students) {
    console.log(`${name}: ${marks}`);
}

// 2 & 3. Highest and lowest scorer (using spread + arrow functions)
const marksList = students.map(({ marks }) => marks);
const highest = Math.max(...marksList);
const lowest = Math.min(...marksList);

let topScorer = students.find(({ marks }) => marks === highest);
let lowScorer = students.find(({ marks }) => marks === lowest);
console.log(`Highest: ${topScorer.name} (${highest})`);
console.log(`Lowest: ${lowScorer.name} (${lowest})`);

// 4. Average marks
const average = marksList.reduce((total, m) => total + m, 0) / students.length;
console.log(`Average: ${average}`);

// 5. Students who scored >= 75
const passed = students.filter(({ marks }) => marks >= 75);
console.log(passed);

// 6. Remove duplicate students (example with duplicates)
let list = [
    { name: "Ajaya", marks: 85 },
    { name: "Ajaya", marks: 85 },
    { name: "Rahul", marks: 72 }
];
const uniqueStudents = [...new Map(list.map((s) => [s.name, s])).values()];
console.log(uniqueStudents);
```

</details>

---

> 📚 **Good luck, and happy coding!** Practice each level in order, run every example, and you'll master ES6 in no time.
