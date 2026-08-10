# Hoisting and Temporal Dead Zone

## Hoisting `***`

- It is the process of **accessing the variables before their initialization**.
- This is possible **only if the variable is declared with `var`**.

```javascript
console.log(x); // undefined (not an error!)
var x = 10;
```

## Temporal Dead Zone (TDZ) `***`

- If any variable is declared with `let` or `const`, and we try to **access it before its initialization**, it is in the **Temporal Dead Zone**.
- It returns an **`Uncaught ReferenceError`**.

```javascript
console.log(y); // ❌ ReferenceError: Cannot access 'y' before initialization
let y = 10;
```

> 💡 **Memory trick:** `var` → hoisted & usable before init (gives `undefined`). `let`/`const` → hoisted but in a *dead zone* until initialized (gives an error).
