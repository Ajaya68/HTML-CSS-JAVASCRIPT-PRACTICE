# JavaScript Complete Notes for Students

A beginner-friendly, complete set of JavaScript notes converted from the class PDF and aligned with the Tpoint Tech JavaScript tutorial.

---

## Table of Contents

1. [What is JavaScript](#1-what-is-javascript)
2. [History of JavaScript](#2-history-of-javascript)
3. [Versions of ECMAScript](#3-versions-of-ecmascript)
4. [Characteristics of JavaScript](#4-characteristics-of-javascript)
5. [Advantages of JavaScript](#5-advantages-of-javascript)
6. [Disadvantages of JavaScript](#6-disadvantages-of-javascript)
7. [Difference between Java and JavaScript](#7-difference-between-java-and-javascript)
8. [Working of the JS Engine](#8-working-of-the-js-engine)
9. [JS Engines of Different Browsers](#9-js-engines-of-different-browsers)
10. [How to Write and Execute JavaScript](#10-how-to-write-and-execute-javascript)
11. [Tokens](#11-tokens)
12. [Variables](#12-variables)
13. [Scope of Variables](#13-scope-of-variables)
14. [Hoisting and Temporal Dead Zone](#14-hoisting-and-temporal-dead-zone)
15. [var vs let vs const](#15-var-vs-let-vs-const)
16. [Data Types](#16-data-types)
17. [Operators](#17-operators)
18. [Decision Making Statements](#18-decision-making-statements)
19. [Looping Statements](#19-looping-statements)
20. [Break and Continue](#20-break-and-continue)
21. [Type Conversion](#21-type-conversion)
22. [Functions](#22-functions)
23. [Types of Functions](#23-types-of-functions)
24. [Closure and Currying](#24-closure-and-currying)
25. [Arrays](#25-arrays)
26. [Strings](#26-strings)
27. [Objects](#27-objects)
28. [Math Object](#28-math-object)
29. [Date Object](#29-date-object)
30. [Browser Object Model (BOM)](#30-browser-object-model-bom)
31. [Document Object Model (DOM)](#31-document-object-model-dom)
32. [Events](#32-events)
33. [Promises](#33-promises)
34. [ES6 Features](#34-es6-features)
35. [JavaScript Syntax and Comments](#35-javascript-syntax-and-comments)
36. [Iterating with for...of and for...in](#36-iterating-with-forof-and-forin)
37. [Function Methods: call() apply() bind()](#37-function-methods-call-apply-bind)
38. [The Event Loop](#38-the-event-loop)
39. [JSON](#39-json)
40. [Form Validation](#40-form-validation)
41. [Cookies](#41-cookies)
42. [Exception Handling (try...catch)](#42-exception-handling-trycatch)
43. [Collections: Map and Set](#43-collections-map-and-set)
44. [OOPs in JavaScript](#44-oops-in-javascript)
45. [Applications of JavaScript](#45-applications-of-javascript)
46. [Frameworks and Libraries](#46-frameworks-and-libraries)
47. [Career Opportunities](#47-career-opportunities)

---

## 1. What is JavaScript

> JavaScript (JS) is a **lightweight, object-oriented programming language** used to create **interactive web pages**. It is an **interpreted** language (executes code line by line) and it is **single-threaded** (executes one task at a time).

- It is the **only language understood by the browser**.
- JavaScript is a **scripting language**.
- It can be used on both the **browser side (frontend)** and the **server side (backend)**.
- It is the **most commonly used and popular language** right now. JavaScript works together with **HTML** (structure) and **CSS** (styling) to add **functionality and interactivity** to web pages.
- A lot of frameworks and libraries are based on JavaScript:

| Side     | Frameworks & Libraries        |
| -------- | ----------------------------- |
| Frontend | React JS, Angular JS, Next JS |
| Backend  | Node JS, Express JS           |

> 📌 **Key idea:** JavaScript lets you make web pages _do things_ — respond to clicks, validate forms, show animations, and talk to servers.

### JavaScript First Program: Hello World

The classic first program — it prints the text to the browser console:

```javascript
console.log("Hello, World!");
```

### Why learn JavaScript?

- **Easy to Learn:** JavaScript is beginner-friendly and easier to learn than many other programming languages.
- **Versatility:** Can be used for websites, on both the **server side** (Node.js, Express.js) and the **client side**.
- **Client Side:** Supported by almost all browsers, with frameworks like ReactJS, AngularJS, and Vue.js.
- **Server Side:** Runtime environments like **Node.js** and frameworks like **Express.js** are used to build server-side applications.
- **Build Games:** You can create 2D and 3D games with JavaScript.

---

## 2. History of JavaScript

- In **1995**, JavaScript was created by **Brendan Eich** at **Netscape** in just **10 days**.

```
Netscape Communication Corporation
        │
        ▼
Netscape Navigator (Browser)
        │
        ▼
Brendan Eich (1995) → JSE (JavaScript Engine) → SpiderMonkey
        │
        ▼
Mocha
        │
        ▼
LiveScript (renamed with help of Sun Microsystems)
        │
        ▼
JavaScript
        │
        ▼
European Computer Manufacturers Association (ECMA)
        │
        ▼
ECMAScript
```

---

## 3. Versions of ECMAScript

ECMAScript is the **standard** on which JavaScript is based. ES6 (2015) is the most famous release because it added many modern features (arrow functions, classes, `let`/`const`, etc.).

---

## 4. Characteristics of JavaScript

- **Client-side scripting language** — runs in the browser.
- **Dynamically typed language** — variable types are decided at runtime.
- **High-level language** — easy for humans to read and write.
- **Weakly / loosely typed language** — automatic type coercion happens.
- **Interpreted language / synchronous / single-threaded** — executes line by line, one task at a time.
- **Object-oriented programming language** — supports OOP concepts; has **methods and properties** that can be accessed and used in different ways.
- **Prototype-based language** — uses **prototypes** in place of classes. We can specify an object prototype and then construct more objects from it.
- **Light-weight language** — has a **minimal runtime** and **low resource requirements**, made for handling data on the client side.
- **Dynamic typing** — variable types are decided based on the value stored; no need to declare a type before assigning.

---

## 5. Advantages of JavaScript

**1. Client-Side Execution**
Runs directly in the browser, allowing quick and responsive interactions without server-side communication, reducing server load and latency.

**2. Versatility**
Can be used for front-end (React, Angular, Vue), back-end (Node.js), mobile development (React Native), and even desktop applications.

**3. Cross-Browser Compatibility**
Runs on all modern web browsers, making it ideal for creating applications that work across different platforms without needing additional plugins.

**4. Asynchronous Programming**
Support for asynchronous programming (via Promises, `async/await`) helps create non-blocking code that improves performance, especially when handling multiple tasks simultaneously.

**5. Easy to Learn**
Beginner-friendly; it is easier to pick up than many other programming languages.

**6. Game Development**
With HTML5 (canvas) and libraries like **Ease JS**, developers can create interactive 2D/3D games for the web.

> 📌 Points 5–6 come from the official tutorial's "Why learn JavaScript?" section.

---

## 6. Disadvantages of JavaScript

**1. Security Vulnerabilities**
Code is visible to everyone (it runs in the browser).

**2. Browser Differences**
JavaScript behavior can vary across different browsers, requiring developers to test and adjust code for consistent behavior.

**3. Loading Issue**
Interactive content may take longer to load.

**4. Lack of Static Typing**
Variable types are not fixed and can change at runtime, which can lead to unexpected errors that are only caught when the code runs.

---

## 7. Difference between Java and JavaScript

| JAVA                          | JAVASCRIPT                  |
| ----------------------------- | --------------------------- |
| Programming language.         | Scripting language.         |
| Multi-threaded.               | Single-threaded.            |
| Strictly typed.               | Weakly typed.               |
| Runs on Java Virtual Machine. | Runs on all browsers.       |
| More memory used.             | Less memory used.           |
| Independent language.         | Executed along with HTML.   |
| Both compiled and interpreted | Interpreted (not compiled). |

> ⚠️ **Note:** Java and JavaScript are _completely different_ languages — they only share a similar name!

---

## 8. Working of the JS Engine

The JS Engine converts JavaScript code into something the browser can run.

The engine consists of **two main components**:

- **Memory Heap** — this is where the **memory allocation** happens.
- **Call Stack** — this is where your **stack frames** are as your code executes.

---

## 9. JS Engines of Different Browsers

| Browser      | JS Engine              |
| ------------ | ---------------------- |
| Chrome       | V8                     |
| Firefox      | SpiderMonkey           |
| Safari       | JavaScriptCore (Nitro) |
| Edge (older) | Chakra                 |
| Node.js      | V8                     |

---

## 10. How to Write and Execute JavaScript

There are two ways to execute JavaScript:

### 1. Directly in the browser console

Open any browser → press `F12` → click the `Console` tab → type JavaScript code directly.

### 2. Embedding it in an HTML page

#### (a) Internal JavaScript (using the `<script>` tag)

```html
<html>
  <head>
    <title>Document</title>
  </head>
  <body>
    <script>
      console.log("Hello World !!");
    </script>
  </body>
</html>
```

#### (b) External JavaScript (separate `.js` file)

Create a separate file with the `.js` extension and link it using the `src` attribute.

```html
<html>
  <head>
    <title>Document</title>
  </head>
  <body>
    <script src="fileName.js"></script>
  </body>
</html>
```

### The `defer` attribute

**`defer`** holds the execution of the JavaScript file until the complete HTML is loaded. It works with **external JavaScript only**.

---

## 11. Tokens

> A **token** is the smallest unit of a programming language.

### Keywords

- Predefined words which have some **special meaning**, understood by JS.
- Always in **lowercase**.

### Identifiers

- Names provided to any variable, class, function or method.
- Rules:
  - Cannot start with a number, but can have numbers in between.
  - Cannot be a keyword.
  - Cannot have any special characters other than `$` and `_`.
  - Cannot contain spaces.

### Literals

- **Data provided by the user** (the actual values written in code, e.g., `10`, `"hello"`, `true`).

---

## 12. Variables

> A **variable** is a named block of memory used to store a value.

We create a variable using a **variable declaration** followed by an **identifier**.

```
variableDeclaration identifierName = value;
```

There are **three types of variable declarations**:

1. `var`
2. `let`
3. `const`

---

## 13. Scope of Variables

> **Scope** is the _visibility_ of a variable — where it can be accessed.

There are 4 types of scopes:

1. **Global Scope**
2. **Script Scope**
3. **Block Scope**
4. **Function / Local Scope**

### 1. Global Scope

- If a variable is declared with `var`, it is stored in the **global scope**.
- It can be accessed from **anywhere**.

### 2. Script Scope

- If a variable is declared with `let` and `const`, it is stored in the **script scope**.
- It **cannot be accessed** at any time **before initialization**.

### 3. Local / Function Scope

- These are variables defined for a specific scope, like **inside functions**.
- They **cannot be accessed outside** the function.

---

## 14. Hoisting and Temporal Dead Zone

### Hoisting `***`

- It is the process of **accessing variables before their initialization**.
- This is possible **only if the variable is declared with `var`**.

### Temporal Dead Zone (TDZ) `***`

- If a variable is declared with `let` or `const`, and we try to **access it before initialization**, it is in the **Temporal Dead Zone**.
- It returns an **`Uncaught ReferenceError`**.

---

## 15. var vs let vs const

| `var`                                                                                         | `let`                                                                                 | `const`                                                                               |
| --------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| Global scope.                                                                                 | Block scope.                                                                          | Block scope.                                                                          |
| Can declare multiple variables with the same name (most recent one is used).                  | Cannot declare 2 variables with the same name within a block.                         | Cannot declare 2 variables with the same name within a block.                         |
| Value can be modified.                                                                        | Value can be modified.                                                                | Value **cannot** be modified.                                                         |
| Can be declared **without** initialization.                                                   | Can be declared **without** initialization.                                           | **Cannot** be declared without initialization (Syntax error).                         |
| Belongs to the global scope (`window`), accessible via `window`.                              | Does not belong to the global scope; cannot use with `window`.                        | Does not belong to the global object; cannot use with `window`.                       |
| Is hoisted; does **not** belong to the temporal dead zone, can be used before initialization. | Is hoisted; goes to the **temporal dead zone**, cannot be used before initialization. | Is hoisted; goes to the **temporal dead zone**, cannot be used before initialization. |

**Examples:**

```javascript
// var
var a = 10;
a = 20;
console.log(a); // 20

// let
let a = 10;
a = 20;
console.log(a); // 20

// const
const a = 10;
a = 20; // ❌ TypeError: cannot modify the data with new value
```

```javascript
var a; // ✅ allowed
let b; // ✅ allowed
const c; // ❌ SyntaxError — const must be initialized
```

> **Note:** `var` declared inside a function will **not** have global scope.

---

## 16. Data Types

| Primitive Data Types | Non-Primitive Data Types |
| -------------------- | ------------------------ |
| 1. Number            | 1. Object                |
| 2. String            |                          |
| 3. Boolean           |                          |
| 4. Null              |                          |
| 5. Undefined         |                          |
| 6. BigInt            |                          |
| 7. Symbol            |                          |

**Explanations:**

- **Number** — values that can be processed and calculated (integers or decimals).
- **String** — a series of letters and numbers enclosed in quotation marks.
- **Boolean** (`true`/`false`) — lets you evaluate whether a condition meets (or does not meet) specified criteria.
- **Null** — an **empty value**. `null` is **not** the same as `0`; it is the **absence of any value**.
- **Undefined** — a variable that has been **declared but not assigned** a value. It indicates the absence of an initial value.
- **BigInt** — a numeric type for integers with arbitrary precision, allowing numbers larger than what the `Number` type can handle (`2^53 - 1`).
- **Symbol** — a unique and immutable primitive value, often used as object property keys to create private or hidden properties.
- **Object** — a complex data type that stores collections of data in **key-value pairs**.

### The `typeof` operator

- `typeof` is an **unary operator** used to check what type of data is present inside a variable.
- It **always returns a String**.

```javascript
console.log(typeof 42); // "number"
console.log(typeof "hello"); // "string"
console.log(typeof true); // "boolean"
```

---

## 17. Operators

> **Operators** are predefined symbols that perform some specific tasks.

### Types of Operators

1. Arithmetic Operators
2. Assignment Operators
3. Comparison Operators
4. Logical Operators
5. Conditional / Ternary Operator

### 1. Arithmetic Operators

Used to perform arithmetic between variables and/or values.
Given that `y = 5`:

| Operator | Description         | Example  | Result |
| -------- | ------------------- | -------- | ------ |
| `+`      | Addition            | `y + 2`  | 7      |
| `-`      | Subtraction         | `y - 2`  | 3      |
| `*`      | Multiplication      | `y * 2`  | 10     |
| `**`     | Exponentiation      | `y ** 2` | 25     |
| `/`      | Division            | `y / 2`  | 2.5    |
| `%`      | Modulus (remainder) | `y % 2`  | 1      |
| `++`     | Increment           | `y++`    | 6      |
| `--`     | Decrement           | `y--`    | 4      |

### 2. Assignment Operators

Used to assign values to JavaScript variables.
Given that `x = 10` and `y = 5`:

| Operator | Example   | Same As      | Result |
| -------- | --------- | ------------ | ------ |
| `=`      | `x = y`   | `x = y`      | 5      |
| `+=`     | `x += y`  | `x = x + y`  | 15     |
| `-=`     | `x -= y`  | `x = x - y`  | 5      |
| `*=`     | `x *= y`  | `x = x * y`  | 50     |
| `/=`     | `x /= y`  | `x = x / y`  | 2      |
| `%=`     | `x %= y`  | `x = x % y`  | 0      |
| `**=`    | `x **= y` | `x = x ** y` | 100000 |

### 3. Comparison Operators

Used in logical statements to determine equality or difference between variables or values.
Given that `x = 5`:

| Operator | Description                       | Example     | Result |
| -------- | --------------------------------- | ----------- | ------ |
| `==`     | Equal to                          | `x == 5`    | true   |
| `===`    | Equal value and equal type        | `x === "5"` | false  |
| `!=`     | Not equal                         | `x != 8`    | true   |
| `!==`    | Not equal value or not equal type | `x !== "5"` | true   |
| `>`      | Greater than                      | `x > 8`     | false  |
| `<`      | Less than                         | `x < 8`     | true   |
| `>=`     | Greater than or equal to          | `x >= 8`    | false  |
| `<=`     | Less than or equal to             | `x <= 8`    | true   |

### 4. Logical Operators

Used to determine the logic between variables or values.
Given that `x = 6` and `y = 3`:

| Operator | Description | Example                | Result |
| -------- | ----------- | ---------------------- | ------ |
| `&&`     | AND         | `x < 10 && y > 1`      | true   |
| `\|\|`   | OR          | `x === 5 \|\| y === 5` | false  |
| `!`      | NOT         | `!(x === y)`           | true   |

### 5. Conditional / Ternary Operator

Assigns a value to a variable based on some condition.

```
variablename = (condition) ? value1 : value2
```

```javascript
let age = 18;
let status = age >= 18 ? "Adult" : "Minor";
console.log(status); // Adult
```

---

## 18. Decision Making Statements

Used to run code only when certain conditions are met.

1. `if` statements
2. `if...else` statements
3. `else if` ladder
4. `switch` statements

### 1. `if` statement

Execute some code only if a specified condition is `true`.

```javascript
if (condition) {
  // code to be executed if condition is true
}
```

### 2. `if...else` statement

Execute one code block if the condition is `true` and another if it is `false`.

```javascript
if (condition) {
  // code if condition is true
} else {
  // code if condition is not true
}
```

### 3. `else if` ladder

Select one of many sets of lines to execute.

```javascript
if (condition1) {
  // code if condition1 is true
} else if (condition2) {
  // code if condition2 is true
} else {
  // code if neither condition1 nor condition2 is true
}
```

### 4. `switch` statement

Select one of many blocks of code to be executed.

```javascript
switch (n) {
  case 1:
    // execute code block 1
    break;
  case 2:
    // execute code block 2
    break;
  default:
  // code to be executed if n is different from case 1 and 2
}
```

---

## 19. Looping Statements

Loops iterate for **n number of times**.

1. `for` loop
2. `while` loop
3. `do-while` loop

### 1. `for` loop

Used to execute a set of statements repeatedly. Commonly used when you **know how many times** to execute a block of code. It is an **entry-controlled loop**.

```javascript
for (initialization; condition; updation) {
  // Code to be executed
}
```

### 2. `while` loop

Loops through a block of code as long as a specified condition is `true`. Commonly used when you **don't know** how many times to run. It is an **entry-controlled loop**.

```javascript
initialization;
while (condition) {
  // Code to be executed
  // updation
}
```

### 3. `do-while` loop

Executes the code block **once**, _before_ checking the condition, then repeats as long as the condition is `true`. Used when the loop must run **at least once**. It is an **exit-controlled loop**.

```javascript
initialization;
do {
  // Code to be executed
  // updation
} while (condition);
```

---

## 20. Break and Continue

### `break`

- Used to **jump out of a loop** (or a `switch()` statement).
- Breaks the loop and continues executing the code **after** the loop.
- Can **only** be used to jump out of a loop or switch.

### `continue`

- "Jumps over" **one iteration** in the loop.
- Breaks the current iteration and continues with the **next iteration**.
- Can **only** be used to skip one loop iteration.

---

## 21. Type Conversion

> **Type conversion (typecasting)** means transferring data from one data type to another.

### Implicit Type Conversion

Happens automatically when the compiler or runtime converts data types.

```javascript
5 - "3"; // 2  (string "3" converted to number)
5 + "3"; // "53" (number 5 converted to string, concatenation)
```

### Explicit Type Conversion

Converting from one data type to another **knowingly** (may lead to data loss).

**Converting to Number:**

```javascript
Number("123"); // 123
parseInt("10.5"); // 10
parseFloat("10.5"); // 10.5
```

**Converting to String:**

```javascript
String(123); // "123"
(123).toString(); // "123"
```

**Converting to Boolean:**

```javascript
Boolean(0); // false
Boolean(1); // true
```

---

## 22. Functions

> In JavaScript, a **function** is a block of reusable code that performs a specific task.
> It can take input parameters, perform operations, and return a value.

### Function Declaration

A function definition consists of the `function` keyword, followed by:

1. The **name** of the function.
2. A list of **parameters**, enclosed in parentheses and separated by commas.
3. The JavaScript **statements** defining the function, enclosed in curly braces `{ ... }`.

```javascript
function square(number) {
  return number * number;
}
```

### Parameters and Arguments

- **Parameters** — the variables listed in the function _definition_.
- **Arguments** — the real values _passed to (and received by)_ the function.

```javascript
function functionName(parameter1, parameter2, parameter3) {
  // code to be executed
}
functionName(argument1, argument2, argument3);
```

**Parameter rules:**

- Function definitions do **not** specify data types for parameters.
- Functions do **not** perform type checking on the passed arguments.
- Functions do **not** check the number of arguments received.

### Default Parameters

If a function is called with missing arguments, the missing values are set to `undefined`. We can pass default values instead.

```javascript
function myFunction(x, y = 10) {
  return x + y;
}
myFunction(5); // 15
```

### Return

- The `return` statement stops the function's execution and optionally returns a value to the caller.
- When `return` is encountered, the function stops running and outputs the specified value.
- If **no value** is provided, the function returns `undefined` by default.

```javascript
function product(a, b) {
  return a * b; // Return the product of a and b
}
console.log(product(6, 10)); // 60
```

### Invocation

- The code inside a function is **not executed** when the function is defined.
- It is executed when the function is **invoked (called)**.

```javascript
function myFunction(a, b) {
  return a * b;
}
myFunction(10, 2); // return 20
```

---

## 23. Types of Functions

1. Named Function
2. Anonymous Function
3. First Class Function
4. Function Expression
5. Immediately Invoked Function Expression (IIFE)
6. Arrow Function
7. Higher Order Function
8. Callback Function
9. Nested Function
10. Generator Function

### 1. Named Function

A function declared with an identifier (name).

```javascript
function sum(a, b) {
  return a + b;
}
console.log(sum(10, 20)); // 30
```

### 2. Anonymous Function

A function declared **without** an identifier. It must be stored in a variable to be executed.

```javascript
var add = function (a, b) {
  return a + b;
};
console.log(add(10, 20)); // 30
```

### 3. First Class Function

- A function which is **assigned as a value to a variable**.
- Can be a named / anonymous / arrow function.
- Can be accessed **only with the variable name**, not the function name.

```javascript
let demo = function add(a, b) {
  console.log(a + b);
};
demo(20, 10); // 30
add(20, 10); // ❌ Error
```

### 4. Function Expression

An expression of **storing any function into a variable**.

```javascript
let expression = function () {
  console.log("Function stored in a variable");
};
expression();
```

### 5. Immediately Invoked Function Expression (IIFE)

- A function that runs **immediately**.
- Consists of a couple of parentheses followed by a semicolon:
  - First parenthesis → the **function**.
  - Second parenthesis → the **invocation**.
  - Semicolon → end of function.

```javascript
(function (a, b) {
  console.log(a + b);
})(10, 20); // 30

((a) => console.log(a ** 2))(10); // 100
```

### 6. Arrow Function

- An advanced, shorter function.
- Must be stored in a variable to execute.

```javascript
var s = (a) => {
  return a ** 2;
};
console.log(s(10)); // 100
```

**Implicit return:** if there is only one statement in the block, the block and the `return` keyword are not required.

```javascript
var s = (a) => a ** 2;
console.log(s(10)); // 100
```

**One parameter:** parentheses are not required.

```javascript
var s = (a) => a ** 2;
console.log(s(10)); // 100
```

### 7. Higher Order Function

A function which **accepts another function as an argument** and/or **returns a function**.

### 8. Callback Function

A function which is **passed as a parameter** to another function.

```javascript
function cal(a, b, operation) {
  return operation(a, b);
}

function sum(a, b) {
  return a + b;
}
function sub(a, b) {
  return a - b;
}
function mul(a, b) {
  return a * b;
}

console.log(cal(10, 20, sum)); // 30
console.log(cal(10, 20, sub)); // -10
console.log(cal(10, 20, mul)); // 200
```

> In this example, `cal` is the **Higher Order Function**, and `sum`, `sub`, `mul` are the **callback functions**.

### 9. Nested Function

A function **inside another function**.

```javascript
function fun1() {
  // Code
  function fun2() {
    // Code
  }
}
```

**Example — a Bank:**

```javascript
function Bank() {
  var accountNo = 123;
  var holderName = "Akshay Thakur";
  var balance = 50000;

  function Deposit() {
    var amount = Number(prompt("Enter amount:"));
    return amount + balance;
  }
  return Deposit;
}
console.log(Bank()());
```

### 10. Generator Function

- Functions that can **pause and resume execution**, yielding values in the process.
- Declared with a `*` after the `function` keyword and uses `yield`.

```javascript
function* generateNumbers() {
  yield 1;
  yield 2;
  yield 3;
}

let serial = generateNumbers();
console.log(serial.next().value); // 1
console.log(serial.next().value); // 2
console.log(serial.next().value); // 3
```

---

## 24. Closure and Currying

### Closure

- Whenever a **nested function requires a variable of the parent function**, the JS Engine creates **closures**.
- Closures are **held by the child function**.
- Closures hold **only the required variables**.

### Currying

- The process of **invoking the nested function along with the parent function**.
- In the Bank example above, `Bank()()` is called **currying**.

---

## 25. Arrays

> An **Array** is an object that enables storing a collection of multiple items under a single variable name.

### Ways to create an Array

**1. Literal way**

```javascript
const fruits = ["Apple", "Banana"];
```

**2. Constructor way**

```javascript
const fruits = new Array("apple", "banana");
```

### Array Methods

| Method                              | Description                                             | Example                    | Output                           |
| ----------------------------------- | ------------------------------------------------------- | -------------------------- | -------------------------------- |
| `length`                            | Returns the length (size) of an array.                  | `fruits.length`            | `4`                              |
| `at(index)`                         | Returns an indexed element.                             | `fruits.at(2)`             | `"Sita"`                         |
| `push(el)`                          | Adds element(s) to the **end**; returns new length.     | `fruits.push("Raj")`       | `5`                              |
| `pop()`                             | Removes the **last** element; returns removed element.  | `fruits.pop()`             | `"Bishal"`                       |
| `shift()`                           | Removes the **first** element; returns removed element. | `fruits.shift()`           | `"Ram"`                          |
| `unshift(el)`                       | Adds element at the **beginning**; returns new length.  | `fruits.unshift("Gita")`   | `5`                              |
| `concat(arr)`                       | Merges arrays into a **new** array.                     | `fruits.concat(arr)`       | merged array                     |
| `toString()`                        | Converts array to a comma-separated string.             | `fruits.toString()`        | `"Ram,Hari,Sita,Bishal"`         |
| `join()`                            | Joins all elements into a string.                       | `fruits.join()`            | `"Ram,Hari,Sita,Bishal"`         |
| `flat()`                            | Flattens nested arrays.                                 | `fruits.flat()`            | `['Ram','Hari','Sita','Bishal']` |
| `splice(start, deleteCount, items)` | Adds/removes items in place.                            | `fruits.splice(1,1,"Raj")` | removes `"Hari"`                 |
| `slice(start, end)`                 | Slices out a piece into a new array.                    | `fruits.slice(1,3)`        | `['Hari','Sita']`                |
| `reverse()`                         | Reverses the array in place.                            | `fruits.reverse()`         | reversed array                   |
| `sort()`                            | Sorts an array **alphabetically**.                      | `fruits.sort()`            | sorted array                     |
| `map(cb)`                           | New array from a function on each element.              | `arr.map(v => v ** 2)`     | `[1,4,9,...]`                    |
| `filter(cb)`                        | New array with elements passing a condition.            | `arr.filter(v => v > 3)`   | `[5,8]`                          |
| `reduce(cb, initial)`               | Reduces array to a single value.                        | `arr.reduce((t,v)=>t+v,5)` | `24`                             |
| `forEach(cb)`                       | Runs a function once for each element.                  | `arr.forEach(...)`         | `undefined`                      |

**Detailed examples:**

```javascript
// length
const fruits = ["Ram", "Hari", "Sita", "Bishal"];
console.log(fruits.length); // 4

// at()
console.log(fruits.at(2)); // Sita

// shift()
fruits.shift();
console.log(fruits); // ["Hari", "Sita", "Bishal"]

// unshift()
fruits.unshift("Gita");
console.log(fruits); // ["Gita", "Ram", "Hari", "Sita", "Bishal"]

// toString()
console.log(fruits.toString()); // Ram,Hari,Sita,Bishal
```

```javascript
// splice() — add/remove items
const fruits = ["Ram", "Hari", "Sita", "Bishal"];
console.log(fruits.splice(1, 1, "Raj")); // ['Hari'] (deleted)
console.log(fruits); // ['Ram', 'Raj', 'Sita', 'Bishal']

// slice()
const fruits2 = ["Ram", "Hari", "Sita", "Bishal"];
console.log(fruits2.slice(1, 3)); // ['Hari', 'Sita']
```

```javascript
// map()
const arr = [1, 2, 3, 5, 8];
console.log(arr.map((value) => value ** 2)); // [1, 4, 9, 25, 64]

// filter()
console.log(arr.filter((value) => value > 3)); // [5, 8]

// reduce()
console.log(arr.reduce((total, value) => total + value, 5)); // 24

// forEach()
arr.forEach((value) => console.log(value * 2));
// 2 4 6 10 16
```

---

## 26. Strings

> **Strings** are sequences of characters, written with quotes.
> Single or double quotes work the same — there is **no difference** between them.

### Ways to create Strings

**1. String literals (primitives)**

```javascript
let text = "ramsita";
let text2 = "ramsita";
```

**2. String constructor (object)**

```javascript
let text = new String("ramsita");
```

> **Note:** Strings are automatically converted to string objects when using string methods. This process is called **auto-boxing**.

### String Methods

| Method                  | Description                                           | Example                    | Output                  |
| ----------------------- | ----------------------------------------------------- | -------------------------- | ----------------------- |
| `length`                | Returns the length of a string.                       | `"Babita Jethalal".length` | `15`                    |
| `at(index)`             | Returns the character at an index (accepts negative). | `text.at(1)`               | `"a"`                   |
| `charAt(index)`         | Returns the character at an index.                    | `text.charAt(1)`           | `"a"`                   |
| `charCodeAt(index)`     | Returns the **ASCII** code of a character.            | `text.charCodeAt(1)`       | `97`                    |
| `concat(str)`           | Joins two or more strings.                            | `text1.concat(text2)`      | `"BabitaJethalal"`      |
| `trim()`                | Removes whitespace from **both sides**.               | `text.trim()`              | `"Babita Jethalal"`     |
| `trimStart()`           | Removes whitespace from the **start**.                | `text.trimStart()`         | `"Babita Jethalal"`     |
| `trimEnd()`             | Removes whitespace from the **end**.                  | `text.trimEnd()`           | `"Babita Jethalal"`     |
| `toUpperCase()`         | Converts to uppercase.                                | `text.toUpperCase()`       | `"BABITA JETHALAL"`     |
| `toLowerCase()`         | Converts to lowercase.                                | `text.toLowerCase()`       | `"babita jethalal"`     |
| `slice(start, end)`     | Extracts a part into a new string (includes end).     | `text.slice(3,7)`          | `"ita"`                 |
| `substring(start, end)` | Same as slice; negative values treated as `0`.        | `text.substring(3,7)`      | `"ita"`                 |
| `replace(old, new)`     | Replaces the **first** occurrence.                    | `text.replace("a","z")`    | `"Bzbita Jethalal"`     |
| `replaceAll(old, new)`  | Replaces **all** occurrences.                         | `text.replaceAll("a","z")` | `"Bzbitz Jethzlzl"`     |
| `split(separator)`      | Converts a string to an array.                        | `text.split(" ")`          | `['Babita','Jethalal']` |

---

## 27. Objects

> **Objects** are real-time entities that have **properties** and **methods**.
> They are defined with `{}` and store data as **key-value pairs**.

```javascript
let details = {
  name: "dinga",
  id: 1,
};
```

### Ways to create an object

**1. Object literal**

```javascript
var identifier = {
  key1: value1,
  key2: value2,
};
```

**2. Object constructor method**

```javascript
let details = new Object();
details.name = "Dinga";
details.age = 35;
details.skills = "Javascript";

console.log(details); // {name: 'Dinga', age: 35, skills: 'Javascript'}
```

**3. Function constructor method**

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

> By convention, the constructor function name starts with a **capital letter**.

**4. Class constructor method** (introduced in ES6)

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

### How to access object properties

**1. Dot notation**

```javascript
console.log(details.name); // dinga
```

**2. Box (bracket) notation**

```javascript
console.log(details["name"]); // dinga
```

> **Note:** With box notation, the key should be passed as a string.

### Object Methods

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

**1. `Object.create()`** — create a new object from an existing object.

```javascript
let details = { u_name: "dinga", age: 35, skills: "javascript" };

let person = Object.create(details);
person.u_name = "dingi";
person.age = 33;
console.log(person);
```

**2. `Object.assign()`** — copy properties from one or more objects (returns target object).

```javascript
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);
console.log(target); // Object { a: 1, b: 4, c: 5 }
```

**3. `Object.keys()`** — returns an array of the keys.

```javascript
console.log(Object.keys(details)); // ['u_name', 'age', 'skills']
```

**4. `Object.values()`** — returns an array of the values.

```javascript
console.log(Object.values(details)); // ['dinga', 35, 'javascript']
```

**5. `Object.hasOwn()`** — checks if the object has a specified property (returns boolean).

```javascript
console.log(Object.hasOwn(details, "u_name")); // true
```

**6. `Object.entries()`** — returns an array of key/value pairs.

```javascript
console.log(Object.entries(details)); // [['u_name','dinga'],['age',35],['skills','javascript']]
```

**7. `Object.seal()`** — cannot add or delete properties, but **can modify** existing values.

```javascript
console.log(Object.seal(details)); // {u_name: 'dinga', age: 35, skills: 'javascript'}
```

**8. `Object.isSealed()`** — returns `true` if the object is sealed.

**9. `Object.freeze()`** — cannot add, delete, **or modify** properties.

```javascript
console.log(Object.freeze(details)); // {u_name: 'dinga', age: 35, skills: 'javascript'}
```

**10. `Object.isFrozen()`** — returns `true` if the object is frozen.

> 💡 **seal vs freeze:** `seal` = read/write but no add/delete. `freeze` = read-only, nothing can change.

---

## 28. Math Object

> The `Math` object is used to perform **mathematical operations** like `max()`, `cbrt()`, etc.

| Method              | Description                            | Example                | Output   |
| ------------------- | -------------------------------------- | ---------------------- | -------- |
| `Math.max(a, b, c)` | Maximum value.                         | `Math.max(10, 11, 12)` | `12`     |
| `Math.min(a, b, c)` | Minimum value.                         | `Math.min(10, 11, 12)` | `10`     |
| `Math.ceil(x)`      | Rounds **up** to the highest integer.  | `Math.ceil(10.9)`      | `11`     |
| `Math.floor(x)`     | Rounds **down** to the lowest integer. | `Math.floor(10.9)`     | `10`     |
| `Math.trunc(x)`     | Removes the decimal part.              | `Math.trunc(10.9)`     | `10`     |
| `Math.round(x)`     | Rounds to the nearest integer.         | `Math.round(10.9)`     | `11`     |
| `Math.sqrt(x)`      | Square root.                           | `Math.sqrt(36)`        | `6`      |
| `Math.cbrt(x)`      | Cube root.                             | `Math.cbrt(8)`         | `2`      |
| `Math.random()`     | Random number between 0 and 1.         | `Math.random()`        | `0.1...` |

```javascript
console.log(Math.max(10, 11, 12)); // 12
console.log(Math.min(10, 11, 12)); // 10

console.log(Math.ceil(10.9)); // 11
console.log(Math.ceil(10.1)); // 11

console.log(Math.floor(10.9)); // 10
console.log(Math.floor(10.4)); // 10

console.log(Math.trunc(10.9)); // 10
console.log(Math.trunc(10.1)); // 10

console.log(Math.round(10.9)); // 11
console.log(Math.round(10.4)); // 10

console.log(Math.sqrt(36)); // 6
console.log(Math.cbrt(8)); // 2
```

**Random numbers below 100:**

```javascript
let random = Math.random() * 100;
console.log(random); // e.g., 20, 35
```

---

## 29. Date Object

> JavaScript `Date` objects represent a single moment in time in a platform-independent format.
> The `Date` object is used to work with dates and times.

### Create a Date object

```javascript
let date = new Date();
console.log(date); // e.g., Mon Sep 09 2024 07:52:34 GMT+0530 (India Standard Time)
```

### Date Methods

**`Date.now()`** — returns the number of milliseconds elapsed since midnight, **January 1, 1970, UTC** (the Unix timestamp).

```javascript
let date = Date.now();
console.log(date); // e.g., 1725849275157
```

**`getFullYear()`** — returns the year as a four-digit number.

```javascript
let date = new Date();
console.log(date.getFullYear()); // 2024
```

**`getMonth()`** — returns the month as a number from **0-11** (0 = January).

```javascript
let date = new Date();
console.log(date.getMonth()); // 8 (September)
```

**`getDate()`** — returns the day of the month as a number (1-31).

```javascript
let date = new Date();
console.log(date.getDate()); // 9
```

**`setFullYear()`** — sets the year of a date object.

```javascript
let date = new Date();
date.setFullYear(2022);
console.log(date); // Fri Sep 09 2022 08:29:53 GMT+0530 (India Standard Time)
```

---

## 30. Browser Object Model (BOM)

> The **Browser Object Model (BOM)** allows us to communicate with browsers.
> The browser is always indicated by the **`window`** object.
> Inside `window`, there are many object models: `document`, `screen`, `navigator`, `location`, etc.

### Window Properties

1. `document`
2. `screen`
3. `history`
4. `navigator`
5. `location`
6. `innerHeight`
7. `outerHeight`
8. `innerWidth`
9. `outerWidth`

| Property      | Meaning                                                                      |
| ------------- | ---------------------------------------------------------------------------- |
| `document`    | Represents the current HTML document; used to make changes to it.            |
| `screen`      | Provides info about the screen (height, width, orientation, etc.).           |
| `history`     | Tracks web pages you opened; supports `forward()` and `back()`.              |
| `navigator`   | Provides info about the browser (`appName`, `appVersion`, etc.).             |
| `location`    | Provides info about the current location (`path`, `hostname`, `href`, etc.). |
| `innerHeight` | Browser height **excluding** the console area.                               |
| `outerHeight` | Browser height **including** the console area.                               |
| `innerWidth`  | Browser width **excluding** the console area.                                |
| `outerWidth`  | Browser width **including** the console area.                                |

### Window Methods

1. `prompt()`
2. `alert()`
3. `confirm()`
4. `open()`
5. `close()`
6. `setTimeout()`
7. `setInterval()`
8. `clearTimeout()`
9. `clearInterval()`

| Method                            | Purpose                                                    |
| --------------------------------- | ---------------------------------------------------------- |
| `prompt()`                        | Takes user input; displays a popup message in the browser. |
| `alert()`                         | Displays a popup message with an **OK** button.            |
| `confirm()`                       | Displays a popup with **OK** and **CANCEL** buttons.       |
| `open()`                          | Opens a new webpage.                                       |
| `close()`                         | Closes the current webpage.                                |
| `setTimeout(callback, timeout)`   | Holds the execution until the time completes.              |
| `setInterval(callback, interval)` | Performs the same task repeatedly with a time gap.         |
| `clearTimeout()`                  | Stops the working of `setTimeout()`.                       |
| `clearInterval()`                 | Stops the working of `setInterval()`.                      |

---

## 31. Document Object Model (DOM)

> **DOM** stands for **Document Object Model**.
> It is a programming interface to communicate between the **document** and **JavaScript**.
> The document always represents the HTML code of a web page.
> Using the DOM, we can manipulate HTML tags, HTML attributes, and CSS properties.
> Whenever the webpage reloads, it creates a document stored as a **tree-like structure**.

### DOM Selectors

Selectors are used to **target HTML elements** in the document.

| Selector                   | Targets by       | Returns                                     |
| -------------------------- | ---------------- | ------------------------------------------- |
| `getElementById()`         | id name          | only the **first** matching element         |
| `getElementsByClassName()` | class name       | **all** matching elements (HTML collection) |
| `getElementsByTagName()`   | tag name         | **all** matching elements (HTML collection) |
| `getElementsByName()`      | name attribute   | **all** matching elements (NodeList)        |
| `querySelector()`          | id / class / tag | only the **first** matching element         |
| `querySelectorAll()`       | id / class / tag | **all** matching elements                   |

```javascript
document.getElementById("idName");
document.getElementsByClassName("className");
document.getElementsByTagName("tagName");
document.getElementsByName("name");
document.querySelector("#idName / .className / tagName");
document.querySelectorAll("#idName / .className / tagName");
```

> ⚠️ **Note:** Some selectors return **collections**. These collections are **not actual arrays** — they are _array-like collections_. We can perform indexing & iteration, but **not** array methods like `push`, `pop`, `shift`, `unshift`, etc.

### CRUD on HTML Elements

**1. `createElement()`** — creates a new element.

```javascript
let div = document.createElement("div");
```

**2. `append()`** — appends content or a node into the parent element.

```javascript
section.append("This is Text Information");
section.append(div);
```

**3. `appendChild()`** — appends **only nodes** into the parent element.

```javascript
section.appendChild(div); // ✅
section.appendChild("This is Text Information"); // ❌ Error (must be a node)
```

**4. `textContent` / `innerText` / `innerHTML`** — update content in an element. `textContent` and `innerText` are similar; `innerHTML` allows HTML tags.

```javascript
div.textContent = "This is content";
div.innerText = "This is content";
div.innerHTML = "<b>This is content</b>";
```

**5. `replaceChild()`** — replaces a node with a new node.

```javascript
parent.replaceChild(newNode, prevNode);
section.replaceChild(h1, div);
```

**6. `removeChild()`** — removes a node from the element.

```javascript
parent.removeChild(nodeName);
section.removeChild(h1);
```

### CRUD on HTML Attributes

**1. `setAttribute()`** — adds a new attribute; updates the value if it already exists.

```javascript
div.setAttribute("id", "demo");
```

**2. `getAttribute()`** — returns the attribute value of an element.

```javascript
div.getAttribute("id"); // demo
```

**3. `removeAttribute()`** — removes an existing attribute.

```javascript
div.removeAttribute("id");
```

### CRUD on CSS Properties

**1. `setProperty()` / `propertyName` / `cssText`** — add CSS properties to an element.

- `setProperty` and `propertyName` can add **one** property at a time.
- `cssText` can add **multiple** properties at once.
- Works as **inline style** only.

```javascript
div.style.setProperty("font-size", "40px");
div.style.fontSize = "40px";
div.style.cssText = "font-size: 40px; color: teal;";
```

**2. `getPropertyValue()`** — gets the value of a CSS property.

```javascript
div.style.getPropertyValue("font-size");
```

**3. `removeProperty()`** — removes a CSS property.

```javascript
div.style.removeProperty("font-size");
```

---

## 32. Events

> **Events** are actions performed by either the browser or the user.

### Common events

| Mouse Events | Key Events | Form Events | Window Events |
| ------------ | ---------- | ----------- | ------------- |
| `click`      | `keypress` | `submit`    | `load`        |
| `dblclick`   | `keydown`  | `reset`     | `resize`      |
| `mouseup`    | `keyup`    | `focus`     | `scroll`      |
| `mousedown`  |            | `blur`      |               |
| `mouseover`  |            | `change`    |               |
| `mouseout`   |            |             |               |
| `mousemove`  |            |             |               |

### 3 ways to attach events

**1. HTML attributes**

```html
<div onclick="alert('Click Event is triggered')">Div Tag</div>
```

**2. DOM properties**

```javascript
div.onclick = fun;
function fun() {
  div.style.cssText =
    "color: white; background-color: teal; border:1px solid; text-align:center;";
}
```

**3. `addEventListener()`** — the **best way** to attach events.

- With HTML attributes & DOM properties, we can use one event **only once**.
- With `addEventListener`, we can attach **multiple functions** to the same event.

```javascript
button.addEventListener("click", () => {
  console.log("Click Event is Triggered");
});
```

**Removing an event** with `removeEventListener()`:

```javascript
button.addEventListener("click", greet);

function greet() {
  console.log("Hi Hello How are you?");
}

button.removeEventListener("click", greet);
```

---

## 33. Promises

> Think of a **Promise** like a _receipt_ for a delivery. When you order something online, you get a receipt immediately, but the actual delivery happens later. Similarly, a Promise is an object that represents a value which will be available **in the future**.

- A **Promise** is an **object**.
- It is used to convert normal JavaScript code into **asynchronous** (async) code — code that doesn't block and waits for slow operations (like network requests, file reading) in the background.

### The 3 States of a Promise

| State       | Meaning                                                        |
| ----------- | -------------------------------------------------------------- |
| `pending`   | The operation is still running (waiting).                      |
| `fulfilled` | The operation completed **successfully** and returned a value. |
| `rejected`  | The operation **failed** and returned an error.                |

### Syntax

```javascript
let promise = new Promise((resolve, reject) => {
  // do some async work
  if (success) {
    resolve("Work done"); // moves the promise to 'fulfilled'
  } else {
    reject("Something failed"); // moves the promise to 'rejected'
  }
});
```

### Handling a Promise

- Use **`.then()`** to run code when the Promise succeeds.
- Use **`.catch()`** to run code when the Promise fails.

```javascript
promise
  .then((result) => {
    console.log("Success:", result);
  })
  .catch((error) => {
    console.log("Error:", error);
  });
```

---

## 34. ES6 Features

ES6 (ECMAScript 2015) introduced many new, cleaner features to JavaScript:

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

The full ES6 guide with **10 levels of practice exercises** (from `let`/`const` up to `Map` and `Set`), **interview-level practice**, and a **Mini Challenge: Student Result System** are covered in this section and its callouts.

---

## 35. JavaScript Syntax and Comments

### Syntax basics

- JavaScript is **case-sensitive** (`myVar` is different from `myvar`).
- Statements end with a semicolon `;` (optional, but recommended).
- Whitespace and line breaks are ignored.

### Comments

- **Comments** are ignored by the interpreter; they are used to explain code and make it more readable.

```javascript
// This is a single-line comment

/*
  This is a
  multi-line comment
*/
let x = 5; // you can also add a comment at the end of a line
```

---

## 36. Iterating with `for...of` and `for...in`

Two ES6 loops (an addition to the loops in section 19):

| Loop       | Loops over                    | Works best with               |
| ---------- | ----------------------------- | ----------------------------- |
| `for...of` | the **values** of an iterable | Arrays, Strings, `Map`, `Set` |
| `for...in` | the **keys** (property names) | Objects (and array indexes)   |

**`for...of`** — iterates over the *values*:

```javascript
const colors = ["Red", "Green", "Blue"];
for (let color of colors) {
  console.log(color); // Red, Green, Blue
}

for (let char of "JS") {
  console.log(char); // J, S
}
```

**`for...in`** — iterates over the *keys* (property names):

```javascript
const details = { name: "dinga", age: 35, skills: "javascript" };
for (let key in details) {
  console.log(key, details[key]); // name dinga, age 35, skills javascript
}
```

---

## 37. Function Methods: `call()` `apply()` `bind()`

Special methods that let one function be **reused with a chosen `this`** value:

| Method                      | Invokes immediately? | Arguments passed as     | Returns                  |
| --------------------------- | -------------------- | ----------------------- | ------------------------ |
| `call(thisArg, ...args)`    | Yes                  | individual arguments    | the function's result    |
| `apply(thisArg, [args])`    | Yes                  | an **array**            | the function's result    |
| `bind(thisArg, ...args)`    | No                   | individual arguments    | a **new function**       |

```javascript
const person = { name: "Ramesh" };

function greet(goodMorning, time) {
  console.log(`${goodMorning}, ${this.name}! Time: ${time}`);
}

greet.call(person, "Good Morning", "8 AM"); // Good Morning, Ramesh! Time: 8 AM
greet.apply(person, ["Good Morning", "8 AM"]); // Good Morning, Ramesh! Time: 8 AM

const boundGreet = greet.bind(person, "Good Morning");
boundGreet("9 AM"); // Good Morning, Ramesh! Time: 9 AM
```

> 📌 `bind()` does **not** run the function — it returns a new function that keeps the passed `this`.

---

## 38. The Event Loop

- JavaScript is **single-threaded**, yet it handles async operations without blocking.
- The **event loop** manages how asynchronous code gets executed.

**How it works:**

1. Synchronous code runs inside the **Call Stack**.
2. Asynchronous tasks (like `setTimeout`, network requests) are handled by the browser **(Web APIs)** and, when ready, their callbacks are pushed to a **callback/task queue**.
3. When the call stack is **empty**, the **event loop** moves the next task from the queue to the call stack.

```
Call Stack (runs sync code)
    │
    ▼
Web APIs (handle async tasks: timers, fetch...)
    │  (when ready)
    ▼
Callback Queue (waits for its turn)
    │
    ▲ (event loop moves it when the stack is empty)
```

```javascript
console.log("Start");

setTimeout(() => {
  console.log("Inside setTimeout");
}, 0);

console.log("End");

// Output order: Start → End → Inside setTimeout
```

> 📌 The async callback waits for the stack to empty, so `"End"` prints before `"Inside setTimeout"` even with a `0` ms delay.

---

## 39. JSON

> **JSON** (**JavaScript Object Notation**) is a lightweight **text format** used to **store and exchange data** — commonly for moving data between a web server and the browser.

| Method                  | Purpose                                          | Example                                                          |
| ----------------------- | ------------------------------------------------ | ---------------------------------------------------------------- |
| `JSON.parse(str)`       | Converts a JSON **string** into a JS object      | `JSON.parse('{"name":"dinga"}')` → `{ name: 'dinga' }`           |
| `JSON.stringify(obj)`   | Converts a JS object into a JSON **string**      | `JSON.stringify({ name: 'dinga' })` → `'{"name":"dinga"}'`       |

```javascript
// object → string
const details = { name: "dinga", age: 35 };
const jsonStr = JSON.stringify(details);
console.log(jsonStr); // {"name":"dinga","age":35}  (now a string)

// string → object
const obj = JSON.parse(jsonStr);
console.log(obj.age); // 35
```

> 📌 `JSON.parse()` can **fail** (throw an error) if the string is not valid JSON, so always validate or use `try...catch`.

---

## 40. Form Validation

- Form validation **checks user input** before it is sent to the server, making sure the data is correct.
- HTML5 provides built-in constraints like `required`, `min`, `max`, and input `type`.
- JavaScript adds custom checks (e.g., email format) using regular expressions.

```html
<form name="myForm" onsubmit="return validateForm()">
  Name: <input type="text" name="name" />
  Email: <input type="text" name="email" />
  <input type="submit" value="Submit" />
</form>
```

```javascript
function validateForm() {
  let name = document.forms["myForm"]["name"].value;
  let email = document.forms["myForm"]["email"].value;

  if (name === "") {
    alert("Name must be filled out");
    return false;
  }

  // email validation using a regular expression
  let pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!pattern.test(email)) {
    alert("Please enter a valid email");
    return false;
  }

  return true;
}
```

---

## 41. Cookies

- A **cookie** is a small piece of **text data** stored in the browser and sent back to the server with requests.
- Cookies are commonly used to remember users (login state, preferences, etc.).

**Working with `document.cookie`:**

```javascript
// create / update a cookie (name=value; expires=date; path=/)
document.cookie = "username=Dinga; expires=Fri, 31 Dec 2026 12:00:00 UTC; path=/";

// read all cookies (returns a string of name=value pairs)
console.log(document.cookie); // username=Dinga

// delete a cookie by setting a past expiry date
document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
```

> 📌 `expires` (or `max-age`) sets when the cookie dies; `path=/` makes it valid for the whole site. **Without an expiry date**, the cookie is a *session* cookie — deleted when the browser is closed.

---

## 42. Exception Handling (`try...catch`)

- **Exception handling** deals with runtime errors so the program **does not crash**.
- Use `try`, `catch`, `finally`, and create your own errors with `throw`.

```javascript
try {
  let result = 10 / nonExistingVariable; // causes an error
  console.log(result);
} catch (error) {
  console.log("Something went wrong:", error.message);
} finally {
  console.log("This runs no matter what.");
}
```

```javascript
function checkAge(age) {
  if (age < 18) {
    throw "Age must be 18 or above"; // throw our own error
  }
  return "Allowed";
}

try {
  console.log(checkAge(15));
} catch (err) {
  console.log("Error caught:", err); // Error caught: Age must be 18 or above
}
```

---

## 43. Collections: `Map` and `Set`

### `Map`

A **`Map`** is a collection of **key-value pairs** where the keys can be **any type** (in a plain object, keys are always strings).

| Method / Property  | Purpose                       |
| ------------------ | ----------------------------- |
| `map.set(k, v)`    | Adds / updates a key-value pair. |
| `map.get(k)`       | Returns the value of key `k`. |
| `map.has(k)`       | Returns `true` if key exists. |
| `map.delete(k)`    | Removes the entry for key `k`.|
| `map.size`         | Number of entries.            |
| `map.clear()`      | Removes all entries.          |

```javascript
const phoneBook = new Map();
phoneBook.set("dinga", "12345");
phoneBook.set("dingi", "67890");

console.log(phoneBook.get("dinga")); // 12345
console.log(phoneBook.has("dingi")); // true
console.log(phoneBook.size); // 2
phoneBook.delete("dingi");
console.log(phoneBook.size); // 1
```

### `Set`

A **`Set`** is a collection of **unique values**; duplicates are automatically removed.

| Method / Property  | Purpose                          |
| ------------------ | -------------------------------- |
| `set.add(v)`       | Adds a value (ignored if present). |
| `set.has(v)`       | Returns `true` if value exists.  |
| `set.delete(v)`    | Removes a value.                 |
| `set.size`         | Number of values.                |
| `set.clear()`      | Removes all values.              |

```javascript
const uniqueNums = new Set([1, 2, 2, 3, 3, 3]);
console.log(uniqueNums); // Set(3) { 1, 2, 3 }
uniqueNums.add(4);
console.log(uniqueNums.size); // 4
```

---

## 44. OOPs in JavaScript

JavaScript supports Object-Oriented Programming using **prototypes** and (from ES6) **classes**.

### Prototype-based inheritance

```javascript
const personPrototype = {
  greet() {
    console.log("Hello!");
  },
};

const student = Object.create(personPrototype);
student.greet(); // Hello!  (inherited from the prototype)
```

### Classes, `constructor` & `static` methods

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // instance method
  introduce() {
    console.log(`I am ${this.name}, age ${this.age}`);
  }

  // static method (called on the class, not on objects)
  static describe() {
    console.log("A Person has a name and age");
  }
}

let ram = new Person("Ram", 20);
ram.introduce(); // I am Ram, age 20
Person.describe(); // A Person has a name and age
```

### Encapsulation

Hiding internal data — older JS uses **closures**, newer JS uses **private class fields** `#`.

```javascript
class Account {
  #balance = 0; // private — cannot be accessed from outside

  deposit(amount) {
    this.#balance += amount;
  }

  showBalance() {
    console.log(this.#balance);
  }
}

let ac = new Account();
ac.deposit(1000);
ac.showBalance(); // 1000
// ac.#balance → ❌ SyntaxError (private)
```

### Inheritance (`extends`) and Polymorphism (overriding)

```javascript
class Animal {
  speak() {
    console.log("Animal speaks");
  }
}

class Dog extends Animal {
  // polymorphism: override the parent method
  speak() {
    console.log("Woof! Woof!");
  }
}

let d = new Dog();
d.speak(); // Woof! Woof!
```

### Abstraction

Showing only the necessary parts and hiding the complex implementation details — achieved with classes, `static` factory methods, and encapsulation.

---

## 45. Applications of JavaScript

| Application             | Details                                                                                      |
| ----------------------- | -------------------------------------------------------------------------------------------- |
| **Web Development**     | Works with HTML & CSS to add interactivity; used by Google, Facebook, YouTube, LinkedIn, etc. |
| **Server Applications** | Node.js builds backend apps (used by PayPal, GoDaddy, etc.).                                 |
| **Game Development**    | HTML5 + JavaScript together; libraries like Ease JS create interactive web games.            |
| **Web Applications**    | Frameworks like Angular and React build robust web apps.                                      |
| **Smartwatch Apps**     | Libraries like Pebble create apps for smartwatches.                                           |

---

## 46. Frameworks and Libraries

> JavaScript has **frameworks and libraries** for almost every kind of application:

| Framework/Library | Type      | Creator / Originator         | Main Use                                                        |
| ----------------- | --------- | ---------------------------- | --------------------------------------------------------------- |
| **ReactJS**       | Library   | Meta (created by Jordan Walke) | Popular free open-source front-end library for building UIs.  |
| **jQuery**        | Library   | John Resig                   | One of the oldest libraries; simplifies DOM, Ajax, events.       |
| **Vue.js**        | Framework | Evan You (released Feb 2014) | User interfaces and single-page applications.                    |
| **AngularJS**     | Framework | Google                       | Front-end of the MEAN stack; simplifies development & testing.   |
| **Express.js**    | Framework | TJ Holowaychuk, StrongLoop   | Fast backend framework for web apps and APIs (MEAN).             |
| **Ember.js**      | Framework | Open-source (December 2011)  | Scalable SPAs; desktop and mobile apps.                          |

---

## 47. Career Opportunities

After learning JavaScript you can pursue many roles in web and software development:

- **Frontend Developer** — build interactive UIs using JS, HTML, and CSS.
- **Backend Developer** — build server-side apps with frameworks like Node.js.
- **Full Stack Developer** — work on both frontend and backend components.
- **Web Developer** — design, develop, and maintain websites and web apps.
- **React Developer** / **Angular Developer** / **Vue.js Developer** — build single-page applications.
- **Mobile App Developer** — build mobile apps with React Native.
- **Software Engineer** · **UI Developer** · **Game Developer** · **DevOps Engineer** · **Technical Consultant**.

> **Prerequisites:** Before learning JavaScript, you should have a basic understanding of **HTML** and web-page structure; familiarity with **CSS** is also helpful.
>
> **Audience:** This tutorial suits both beginners and professionals — students, web developers, and software engineers.

---

> 📌 **Source:** This file is organized following the structure of the [JavaScript Tutorial at Tpoint Tech](https://www.tpointtech.com/javascript-tutorial).

---

> 📚 **Good luck and happy coding!** Practice every example in the browser console or your editor.
