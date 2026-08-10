# Objects

> **Objects** are real-time entities that have **properties** and **methods**.
> Objects are defined by using `{}`.
> We store data inside the object in the form of **key-value pairs**.

```javascript
let details = {
    name: "dinga",
    id: 1
};
```

## Ways to create an object

### 1. Object Literals

A comma-separated list of key-value pairs wrapped in curly braces.

```javascript
var identifier = {
    key1: value1,
    key2: value2,
    key3: value3
};
```

### 2. Object Constructor Method

Create the object using the `new` keyword.

```javascript
let details = new Object();
details.name = "Dinga";
details.age = 35;
details.skills = "Javascript";

console.log(details); // {name: 'Dinga', age: 35, skills: 'Javascript'}
```

### 3. Function Constructor Method

Create objects using a function. Use the `new` keyword to create an instance. By convention, the constructor name starts with a **capital letter**.

```javascript
function Create(fname, lname) {
    this.fname = fname;
    this.lname = lname;
}

let student1 = new Create("shubham", "patil");
let student2 = new Create("Zeba", "Perveen");
console.log(student1);
console.log(student2);
```

### 4. Class Constructor Method

Introduced in **ES6**. Create objects using a class.

```javascript
class Create {
    constructor(fname, lname) {
        this.fname = fname;
        this.lname = lname;
    }
}

let student1 = new Create("shubham", "patil");
let student2 = new Create("Zeba", "Perveen");
console.log(student1);
console.log(student2);
```

## How to access the object

There are **two ways**:

### 1. Dot Notation

```javascript
let details = {
    name: "dinga",
    age: 35,
    skills: "javascript"
};

console.log(details.name); // dinga
```

### 2. Box (Bracket) Notation

```javascript
console.log(details["name"]); // dinga
```

> **Note:** With box notation, the key should be passed in the form of a string.

## Methods in Object

1. `Object.create()`
2. `Object.assign()`
3. `Object.keys()`
4. `Object.values()`
5. `Object.hasOwn()`
6. `Object.entries()`
7. `Object.seal()`
8. `Object.isSealed()`
9. `Object.freeze()`
10. `Object.isFrozen()`

### 1. `Object.create()`

Creates a new object from an existing object.

```javascript
let details = {
    u_name: "dinga",
    age: 35,
    skills: "javascript"
};

let person = Object.create(details);
person.u_name = "dingi";
person.age = 33;
console.log(person);
```

### 2. `Object.assign()`

Copies the methods and properties of one or more objects. Returns the target modified object.

```javascript
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);
console.log(target); // Object { a: 1, b: 4, c: 5 }
```

### 3. `Object.keys()`

Returns an array with the keys of an object.

```javascript
console.log(Object.keys(details)); // ['u_name', 'age', 'skills']
```

### 4. `Object.values()`

Returns an array of the property values of an object.

```javascript
console.log(Object.values(details)); // ['dinga', 35, 'javascript']
```

### 5. `Object.hasOwn()`

Checks if the object has a specified property or not. Returns a **boolean**.

```javascript
console.log(Object.hasOwn(details, "u_name")); // true
```

### 6. `Object.entries()`

Returns an array of the **key/value pairs** of an object.

```javascript
console.log(Object.entries(details));
// [['u_name', 'dinga'], ['age', 35], ['skills', 'javascript']]
```

### 7. `Object.seal()`

When we use this method:
- We **cannot add** properties.
- We **cannot delete** properties.
- We **can modify** the values of existing properties.

```javascript
console.log(Object.seal(details)); // {u_name: 'dinga', age: 35, skills: 'javascript'}
```

### 8. `Object.isSealed()`

Returns a **boolean** — `true` if the object is sealed.

```javascript
console.log(Object.isSealed(details)); // true
```

### 9. `Object.freeze()`

When we use this method:
- We **cannot add** properties.
- We **cannot delete** properties.
- We **cannot modify** the values of properties.

```javascript
console.log(Object.freeze(details)); // {u_name: 'dinga', age: 35, skills: 'javascript'}
```

### 10. `Object.isFrozen()`

Returns a **boolean** — `true` if the object is frozen.

```javascript
console.log(Object.isFrozen(details)); // true
```

> 💡 **seal vs freeze:** `seal` = values can still be modified (but no add/delete). `freeze` = completely read-only.
