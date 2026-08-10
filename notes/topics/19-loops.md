# Looping Statements

A loop will iterate for **n number of times**.

1. `for` loop
2. `while` loop
3. `do-while` loop

## 1. `for` loop

Used to execute a set of statements repetitively. Commonly used when you **know how many times** you want to execute a block of code.

- **Entry-controlled loop** (checks the condition before running).

```javascript
for (initialization; condition; updation) {
    // Code to be executed
}
```

## 2. `while` loop

Loops through a block of code as long as a specified condition is true. Commonly used when you **don't know** how many times to run — it is based on a condition.

- **Entry-controlled loop**.

```javascript
initialization;
while (condition) {
    // Code to be executed
    // updation
}
```

## 3. `do-while` loop

Executes the code block **once**, *before* checking the condition, then repeats as long as the condition is true. Used when the loop must run **at least once**.

- **Exit-controlled loop** (condition is checked after running).

```javascript
initialization;
do {
    // Code to be executed
    // updation
} while (condition);
```

> 💡 **Key difference:** `while` may run *zero* times if the condition is false at the start; `do-while` always runs **at least once**.
