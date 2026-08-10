# Types of Functions

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

## 1. Named Function

A function declared with an identifier name.

```javascript
function sum(a, b) {
    return a + b;
}
console.log(sum(10, 20)); // 30
```

## 2. Anonymous Function

A function declared **without** an identifier. To execute it, we have to store it in a variable.

```javascript
var add = function (a, b) {
    return a + b;
};
console.log(add(10, 20)); // 30
```

## 3. First Class Function

- A function which is **assigned as a value to a variable**.
- Can be a named function / anonymous function / arrow function.
- It can be accessed **only with the variable name** — you cannot access it with the function name.

```javascript
let demo = function add(a, b) {
    console.log(a + b);
};
demo(20, 10); // 30
add(20, 10);  // ❌ Error
```

## 4. Function Expression

An expression of **storing any function into a variable**.

```javascript
let expression = function () {
    console.log("Function stored in a variable");
};
expression();
```

## 5. Immediately Invoked Function Expression (IIFE)

- A function that runs **immediately**.
- It consists of a couple of parentheses followed by a semicolon:
  - The first parenthesis → the **function**.
  - The second parenthesis → the **invocation**.
  - The semicolon → end of function.

```javascript
(function (a, b) {
    console.log(a + b);
})(10, 20); // 30

(a => console.log(a ** 2))(10); // 100
```

## 6. Arrow Function

- An advanced function — it reduces the code.
- To execute it, we have to store it in a variable.

```javascript
var s = (a) => {
    return a ** 2;
};
console.log(s(10)); // 100
```

**Implicit return:** if there is only one statement in the block, the block is not required and we can return it on the same line without the `return` keyword.

```javascript
var s = (a) => a ** 2;
console.log(s(10)); // 100
```

**One parameter:** parentheses are not required.

```javascript
var s = a => a ** 2;
console.log(s(10)); // 100
```

## 7. Higher Order Function

A function which **accepts another function as an argument** and/or **returns a function**.

## 8. Callback Function

A function which is **sent as a parameter** to another function.

```javascript
function cal(a, b, operation) {
    return operation(a, b);
}

function sum(a, b) { return a + b; }
function sub(a, b) { return a - b; }
function mul(a, b) { return a * b; }

console.log(cal(10, 20, sum)); // 30
console.log(cal(10, 20, sub)); // -10
console.log(cal(10, 20, mul)); // 200
```

> In this example, `cal` is the **Higher Order Function**, and `sum`, `sub`, `mul` are the **callback functions**.

## 9. Nested Function

A function **inside another function**.

```javascript
function fun1() {
    // Code
    function fun2() {
        // Code
    }
    // Code
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

## 10. Generator Function

- Functions that can **pause and resume execution**, yielding values in the process.
- Declared with `function*` and uses `yield`.

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
