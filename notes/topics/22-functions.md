# Functions

> In JavaScript, a **function** is a block of reusable code that performs a specific task.
> It can take input parameters, perform operations, and return a value.
> Functions are essential for structuring and organizing code, making it more readable, maintainable, and efficient.

## Function Declaration

A function definition (also called a function declaration, or function statement) consists of the `function` keyword, followed by:

1. The **name** of the function.
2. A list of **parameters** to the function, enclosed in parentheses and separated by commas.
3. The JavaScript **statements** that define the function, enclosed in curly braces `{ ... }`.

```javascript
function square(number) {
    return number * number;
}
```

## Parameters and Arguments

- **Parameters** — the variables listed in the function *definition*.
- **Arguments** — the real values *passed to (and received by)* the function.

```javascript
function functionName(parameter1, parameter2, parameter3) {
    // code to be executed
}
functionName(argument1, argument2, argument3);
```

**Parameter rules:**
- JavaScript function definitions do **not** specify data types for parameters.
- JavaScript functions do **not** perform type checking on the passed arguments.
- JavaScript functions do **not** check the number of arguments received.

## Default Parameters

If a function is called with missing arguments (less than declared), the missing values are set to `undefined`. We can pass default values instead.

```javascript
function myFunction(x, y = 10) {
    return x + y;
}
myFunction(5); // 15
```

## Return

- The JavaScript `return` statement is used to **stop the function's execution** and optionally return a value to the caller.
- When a `return` statement is encountered, the function stops running and outputs the specified value.
- It can return a value, variable, or expression. If **no value** is provided, the function returns `undefined` by default.

```javascript
function product(a, b) {
    return a * b; // Return the product of a and b
}
console.log(product(6, 10)); // 60
```

## Invocation

- The code inside a function is **not executed** when the function is defined.
- The code inside a function is executed when the function is **invoked (called)**.

```javascript
function myFunction(a, b) {
    return a * b;
}
myFunction(10, 2); // return 20
```
