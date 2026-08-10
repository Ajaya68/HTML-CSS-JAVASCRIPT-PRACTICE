# Date Object

> JavaScript **Date** objects represent a single moment in time in a platform-independent format.
> The Date object is used to work with dates and times.
> It provides methods for getting and setting the year, month, day, hour, minute, second, and millisecond, as well as formatting and manipulating dates.

## Ways to create a Date object

Use the `new Date()` constructor.

```javascript
let date = new Date();
console.log(date); // Mon Sep 09 2024 07:52:34 GMT+0530 (India Standard Time)
```

## Methods of Date Object

### `Date.now()`

Returns the number of **milliseconds elapsed since midnight at the beginning of January 1, 1970, UTC** (the Unix timestamp).

```javascript
let date = Date.now();
console.log(date); // e.g., 1725849275157
```

### `getFullYear()`

Returns the year of a date as a **four-digit number**.

```javascript
let date = new Date();
console.log(date.getFullYear()); // 2024
```

### `getMonth()`

Returns the month of a date as a number (**0-11**). **0 represents January.**

```javascript
let date = new Date();
console.log(date.getMonth()); // 8 (September)
```

### `getDate()`

Returns the day of a date as a number (**1-31**).

```javascript
let date = new Date();
console.log(date.getDate()); // 9
```

### `setFullYear()`

**Sets** the year of a date object.

```javascript
let date = new Date();
date.setFullYear(2022);
console.log(date); // Fri Sep 09 2022 08:29:53 GMT+0530 (India Standard Time)
```
