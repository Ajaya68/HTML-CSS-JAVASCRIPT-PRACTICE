# Strings

> **Strings** are sequences of characters.
> They are written with quotes — strings created with single or double quotes work the same. There is **no difference** between the two.

## Ways to create Strings

### 1. String literals (primitives)

```javascript
let text = "ramsita";
let text2 = 'ramsita';
```

### 2. String constructor (object)

```javascript
let text = new String("ramsita");
```

> **Note:** Strings are automatically converted to string objects when using string methods on them. This process is called **auto-boxing**.

## Methods of Strings

Let `text = "Babita Jethalal"` for the examples below.

### `length`

Returns the length of a string.

```javascript
console.log(text.length); // 15
```

### `at(index)`

Returns the character at the specified index. **Accepts negative values.**

```javascript
console.log(text.at(1)); // a
```

### `charAt(index)`

Returns the character at the specified index.

```javascript
console.log(text.charAt(1)); // a
```

### `charCodeAt(index)`

Returns the **ASCII code** of the character at the specified index.

```javascript
console.log(text.charCodeAt(1)); // 97
```

### `concat(str)`

Joins two or more strings.

```javascript
let text1 = "Babita";
let text2 = "Jethalal";
console.log(text1.concat(text2)); // BabitaJethalal
```

### `trim()`

Removes whitespace from **both sides** of a string.

```javascript
let text = "  Babita Jethalal ";
console.log(text.trim()); // Babita Jethalal
```

### `trimStart()`

Removes whitespace from the **start** of a string.

```javascript
let text = "       Babita Jethalal ";
console.log(text.trimStart()); // Babita Jethalal
```

### `trimEnd()`

Removes whitespace from the **end** of a string.

```javascript
let text = "  Babita Jethalal ";
console.log(text.trimEnd()); // Babita Jethalal
```

### `toUpperCase()`

Converts a string to upper case.

```javascript
console.log(text.toUpperCase()); // BABITA JETHALAL
```

### `toLowerCase()`

Converts a string to lower case.

```javascript
console.log(text.toLowerCase()); // babita jethalal
```

### `slice(start, end)`

Extracts a part of a string and returns it in a new string. It **will also extract the end index**.

```javascript
console.log(text.slice(3, 7)); // ita
```

### `substring(start, end)`

Extracts a part of a string and returns it in a new string. The difference: start and end values **less than 0 are treated as 0**.

```javascript
console.log(text.substring(3, 7)); // ita
```

### `replace(old, new)`

Replaces a specified value with another value in a string. Replaces only the **first occurrence**.

```javascript
console.log(text.replace("a", "z")); // Bzbita Jethalal
```

### `replaceAll(old, new)`

Replaces a specified value with another value in a string. Replaces **all occurrences**.

```javascript
console.log(text.replaceAll("a", "z")); // Bzbitz Jethzlzl
```

### `split(separator)`

Converts a string to an array. The **separator** describes where each split should occur.

```javascript
console.log(text.split(" ")); // ['Babita', 'Jethalal']
```
