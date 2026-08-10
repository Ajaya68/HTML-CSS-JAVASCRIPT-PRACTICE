# Arrays

> An **Array** is an object.
> It enables storing a collection of multiple items under a single variable name.

## Ways to create an Array

### 1. Literal way

```javascript
const fruits = ["Apple", "Banana"];
```

### 2. Constructor way

```javascript
const fruits = new Array("apple", "banana");
```

## Methods of Array

### `length`

Returns the length (size) of an array.

```javascript
const fruits = ["Ram", "Hari", "Sita", "Bishal"];
console.log(fruits.length); // 4
```

### `at(index)`

Returns an indexed element from an array.

```javascript
console.log(fruits.at(2)); // Sita
```

### `push(element)`

Adds one or more elements to the **end** of an array. Returns the **new length**.

```javascript
fruits.push("Raj");
console.log(fruits); // ["Ram", "Hari", "Sita", "Bishal", "Raj"]
```

### `pop()`

Removes the **last** element from an array. Returns the **removed element**.

```javascript
fruits.pop();
```

### `shift()`

Removes the **first** element from an array. Returns the **removed element**.

```javascript
const fruits = ["Ram", "Hari", "Sita", "Bishal"];
fruits.shift();
console.log(fruits); // ["Hari", "Sita", "Bishal"]
```

### `unshift(element)`

Adds a new element at the **beginning** of an array. Returns the **new length**.

```javascript
const fruits = ["Ram", "Hari", "Sita", "Bishal"];
fruits.unshift("Gita");
console.log(fruits); // ["Gita", "Ram", "Hari", "Sita", "Bishal"]
```

### `concat(array)`

Creates a **new array** by merging existing arrays.

```javascript
const fruits = ["Ram", "Hari", "Sita", "Bishal"];
const arr = ["Raj"];
console.log(fruits.concat(arr)); // ["Ram", "Hari", "Sita", "Bishal", "Raj"]
```

### `toString()`

Converts an array to a string of comma-separated values.

```javascript
console.log(fruits.toString()); // Ram,Hari,Sita,Bishal
```

### `join()`

Joins all array elements into a string.

```javascript
console.log(fruits.join()); // Ram,Hari,Sita,Bishal
```

### `flat()`

Creates a new array with sub-array elements concatenated to a specified depth.

```javascript
const fruits = [["Ram"], ["Hari"], ["Sita", "Bishal"]];
console.log(fruits.flat()); // ['Ram', 'Hari', 'Sita', 'Bishal']
```

### `splice(start, deleteCount, item1, item2, ...)`

Adds/removes items in place.

- **start** — at which index to start changing the array.
- **deleteCount** — how many elements to remove from start.
- **items** — elements to add, beginning from start.
- Returns an array containing the **deleted elements**.

```javascript
const fruits = ["Ram", "Hari", "Sita", "Bishal"];
console.log(fruits.splice(1, 1, "Raj")); // ['Hari']  (deleted)
console.log(fruits); // ['Ram', 'Raj', 'Sita', 'Bishal']
```

### `slice(start, end)`

Slices out a piece of an array into a **new array** (end is exclusive).

```javascript
const fruits = ["Ram", "Hari", "Sita", "Bishal"];
console.log(fruits.slice(1, 3)); // ['Hari', 'Sita']
```

### `reverse()`

Reverses the elements in an array.

```javascript
console.log(fruits.reverse()); // ['Bishal', 'Sita', 'Hari', 'Ram']
```

### `sort()`

Sorts an array **alphabetically**.

```javascript
console.log(fruits.sort()); // ['Bishal', 'Hari', 'Ram', 'Sita']
```

### `map(callbackFunction(value, index, array))`

Creates a **new array** by performing a function on each array element. Does **not** change the original array.

```javascript
const arr = [1, 2, 3, 5, 8];
console.log(arr.map(value => value ** 2)); // [1, 4, 9, 25, 64]
```

### `filter(callbackFunction(value))`

Creates a new array with elements that **pass a condition**. The callback should return a **truthy** value to keep the element.

```javascript
const arr = [1, 2, 3, 5, 8];
console.log(arr.filter(value => value > 3)); // [5, 8]
```

### `reduce(callbackFunction(total, value), initialValue)`

Runs a function on each element to reduce the array to a **single value**. Works left-to-right.

- **total** — the initial value / previously returned value.
- **initialValue** — the value we can store initially in total (optional).

```javascript
const arr = [1, 2, 3, 5, 8];
console.log(arr.reduce((total, value) => total + value, 5)); // 24
```

### `forEach(callbackFunction(value))`

Calls a function **once for each** array element. Returns `undefined` (it does not create a new array).

```javascript
const arr = [1, 2, 3, 5, 8];
arr.forEach(value => console.log(value * 2));
// 2
// 4
// 6
// 10
// 16
```

> 📌 **Note:** `map`, `filter`, and `reduce` accept a **callback function** as an argument.
