# var vs let vs const

| `var`                                        | `let`                                            | `const`                                          |
|----------------------------------------------|--------------------------------------------------|--------------------------------------------------|
| Global scope.                                | Block scope.                                     | Block scope.                                     |
| Can declare multiple variables with the same name (most recent one is used). | Cannot declare 2 variables with the same name within a block. | Cannot declare 2 variables with the same name within a block. |
| Value can be modified.                       | Value can be modified.                           | Value **cannot** be modified.                    |
| Can be declared **without** initialization.  | Can be declared **without** initialization.      | **Cannot** be declared without initialization (Syntax error). |
| Belongs to the global scope (`window`), accessible via `window`. | Does not belong to global scope; cannot use with `window`. | Does not belong to the global object; cannot use with `window`. |
| Is hoisted; does **not** belong to the temporal dead zone, can be used before initialization. | Is hoisted; goes to the **temporal dead zone**, cannot be used before initialization. | Is hoisted; goes to the **temporal dead zone**, cannot be used before initialization. |

## Examples

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
a = 20;          // ❌ TypeError: cannot modify the data with new value
```

```javascript
var a;         // ✅ allowed
let b;         // ✅ allowed
const c;       // ❌ SyntaxError — const must be initialized
```

> **Note:** A `var` declared **inside a function** will not have global scope.
