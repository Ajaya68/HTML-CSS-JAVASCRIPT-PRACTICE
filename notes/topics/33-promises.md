# Promises

> Think of a **Promise** like a *receipt* for a delivery. When you order something online, you get a receipt immediately, but the actual delivery happens later. Similarly, a Promise is an object that represents a value which will be available **in the future**.

- A **Promise** is an **object**.
- It is used to convert normal JavaScript code into **asynchronous** (async) code — code that doesn't block and waits for slow operations (like network requests, file reading) in the background.

## The 3 States of a Promise

| State      | Meaning                                                           |
|------------|-------------------------------------------------------------------|
| `pending`  | The operation is still running (waiting).                         |
| `fulfilled`| The operation completed **successfully** and returned a value.    |
| `rejected` | The operation **failed** and returned an error.                   |

## Syntax

```javascript
let promise = new Promise((resolve, reject) => {
    // do some async work
    if (success) {
        resolve("Work done");   // moves the promise to 'fulfilled'
    } else {
        reject("Something failed"); // moves the promise to 'rejected'
    }
});
```

## Handling a Promise

There is one main way to handle (consume) a Promise:

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

> 📚 Related topic: [ES6 Features](../topics/34-es6-features.md)
