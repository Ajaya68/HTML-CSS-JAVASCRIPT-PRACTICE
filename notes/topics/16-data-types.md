# Data Types

## Primitive vs Non-Primitive

| Primitive Data Types | Non-Primitive Data Types |
|----------------------|--------------------------|
| 1. Number            | 1. Object                |
| 2. String            |                          |
| 3. Boolean           |                          |
| 4. Null              |                          |
| 5. Undefined         |                          |
| 6. BigInt            |                          |
| 7. Symbol            |                          |

## Explanations

- **Number** — values that can be processed and calculated (integers or decimals).
- **String** — a series of letters and numbers enclosed in quotation marks.
- **Boolean** (`true`/`false`) — lets you evaluate whether a condition meets or does not meet specified criteria.
- **Null** — an **empty value**. `null` is **not** the same as `0`; `null` is the absence of any value.
- **Undefined** — a variable that has been declared but not assigned a value. It indicates the absence of an initial value.
- **BigInt** — a numeric type used for integers with arbitrary precision, allowing numbers larger than the `Number` type can handle (`2^53 - 1`).
- **Symbol** — a unique and immutable primitive value, often used as object property keys to create private or hidden properties.
- **Object** — a complex data type that allows you to store collections of data in key-value pairs.

## The `typeof` operator

`typeof` is an **unary operator** used to check what type of data is present inside a variable. It **always returns a String**.

```javascript
console.log(typeof 42);        // "number"
console.log(typeof "hello");   // "string"
console.log(typeof true);      // "boolean"
console.log(typeof null);      // "object"
console.log(typeof undefined); // "undefined"
console.log(typeof 10n);       // "bigint"
console.log(typeof Symbol());  // "symbol"
console.log(typeof {});        // "object"
```
