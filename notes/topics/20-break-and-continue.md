# Control Flow of a Loop: break and continue

## `break`

- The `break` statement is used to **jump out of a loop**.
- It can also be used to "jump out" of a `switch()` statement.
- It **breaks the loop** and continues executing the code **after** the loop.
- Can **only** be used to jump out of a loop or switch.

```javascript
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        break;      // stops the loop when i is 5
    }
    console.log(i); // 1 2 3 4
}
```

## `continue`

- The `continue` statement **"jumps over" one iteration** in the loop.
- It breaks the current iteration and continues executing the **next iteration**.
- Can **only** be used to skip one loop iteration.

```javascript
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue;   // skip 3
    }
    console.log(i); // 1 2 4 5
}
```
