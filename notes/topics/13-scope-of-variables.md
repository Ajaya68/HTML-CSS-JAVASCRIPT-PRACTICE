# Scope of Variables

> **Scope** is the visibility of a variable — where it can be accessed from.

## There are 4 types of scopes

1. Global Scope
2. Script Scope
3. Block Scope
4. Function / Local Scope

## 1. Global Scope

- If any variable is declared with `var`, this variable is stored in the **Global Scope**.
- We can access it from **anywhere**.

## 2. Script Scope

- If any variable is declared with `let` and `const`, this variable is stored in the **script scope**.
- We **cannot access it at any time before initialization**.

## 3. Local / Function Scope

- These are variables defined for a specific scope, like **inside functions**.
- We **cannot access these variables outside** the function.

```javascript
var x = 10;          // Global scope
let y = 20;          // Script scope

function show() {
    var z = 30;      // Local / function scope
    console.log(x);  // ✅ can access global
    console.log(y);  // ✅ can access script
    console.log(z);  // ✅ local
}

show();
console.log(z); // ❌ Error — z is not defined outside the function
```
