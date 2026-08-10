# Decision Making Statements

1. `if` statements
2. `if...else` statements
3. `else if` ladder
4. `switch` statements

## 1. `if` statement

Use this statement when you want to execute some code only if a specified condition is true.

```javascript
if (condition) {
    // code to be executed if condition is true
}
```

## 2. `if...else` statement

Use this when you want to execute some code if a condition is true and another code if it is not true.

```javascript
if (condition) {
    // code to be executed if condition is true
} else {
    // code to be executed if condition is not true
}
```

## 3. `else if` ladder

Use this when you want to select one of many sets of lines to execute.

```javascript
if (condition1) {
    // code to be executed if condition1 is true
} else if (condition2) {
    // code to be executed if condition2 is true
} else {
    // code to be executed if condition1 and condition2 are not true
}
```

## 4. `switch` statement

Use this when you want to select one of many blocks of code to be executed.

```javascript
switch (n) {
    case 1:
        // execute code block 1
        break;
    case 2:
        // execute code block 2
        break;
    default:
        // code to be executed if n is different from case 1 and 2
}
```

> 💡 **Tip:** Use `switch` instead of many `else if` blocks when you are comparing a single value against many options.
