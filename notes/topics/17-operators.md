# Operators

> **Operators** are predefined symbols which perform some specific tasks.

## Types of Operators

1. Arithmetic Operators
2. Assignment Operators
3. Comparison Operators
4. Logical Operators
5. Conditional / Ternary Operator

## 1. Arithmetic Operators

Used to perform arithmetic between variables and/or values.
Given that `y = 5`:

| Operator | Description        | Example | Result |
|----------|--------------------|---------|--------|
| `+`      | Addition           | `y + 2` | 7      |
| `-`      | Subtraction        | `y - 2` | 3      |
| `*`      | Multiplication     | `y * 2` | 10     |
| `**`     | Exponentiation     | `y ** 2` | 25    |
| `/`      | Division           | `y / 2` | 2.5    |
| `%`      | Modulus (remainder)| `y % 2` | 1      |
| `++`     | Increment          | `y++`   | 6      |
| `--`     | Decrement          | `y--`   | 4      |

## 2. Assignment Operators

Used to assign values to JavaScript variables.
Given that `x = 10` and `y = 5`:

| Operator | Example   | Same As      | Result   |
|----------|-----------|--------------|----------|
| `=`      | `x = y`   | `x = y`      | 5        |
| `+=`     | `x += y`  | `x = x + y`  | 15       |
| `-=`     | `x -= y`  | `x = x - y`  | 5        |
| `*=`     | `x *= y`  | `x = x * y`  | 50       |
| `/=`     | `x /= y`  | `x = x / y`  | 2        |
| `%=`     | `x %= y`  | `x = x % y`  | 0        |
| `**=`    | `x **= y` | `x = x ** y` | 100000   |

## 3. Comparison Operators

Used in logical statements to determine equality or difference between variables or values.
Given that `x = 5`:

| Operator | Description                       | Example    | Result |
|----------|-----------------------------------|------------|--------|
| `==`     | Equal to                          | `x == 5`   | true   |
| `===`    | Equal value and equal type        | `x === "5"`| false  |
| `!=`     | Not equal                         | `x != 8`   | true   |
| `!==`    | Not equal value or not equal type | `x !== "5"`| true   |
| `>`      | Greater than                      | `x > 8`    | false  |
| `<`      | Less than                         | `x < 8`    | true   |
| `>=`     | Greater than or equal to          | `x >= 8`   | false  |
| `<=`     | Less than or equal to             | `x <= 8`   | true   |

## 4. Logical Operators

Used to determine the logic between variables or values.
Given that `x = 6` and `y = 3`:

| Operator | Description | Example                  | Result |
|----------|-------------|--------------------------|--------|
| `&&`     | AND         | `x < 10 && y > 1`        | true   |
| `\|\|`   | OR          | `x === 5 \|\| y === 5`   | false  |
| `!`      | NOT         | `!(x === y)`             | true   |

## 5. Conditional / Ternary Operator

Assigns a value to a variable based on some condition.

```
variablename = (condition) ? value1 : value2
```

```javascript
let age = 18;
let status = (age >= 18) ? "Adult" : "Minor";
console.log(status); // Adult
```
