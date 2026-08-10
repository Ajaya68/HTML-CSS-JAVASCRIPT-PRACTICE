# Math Object

> The **Math** object is used to perform mathematical operations like `max()`, `cbrt()`, etc.

## Methods in Math Object

### 1. `Math.max()`

Gives the **maximum** value among the specified values.

```javascript
console.log(Math.max(10, 11, 12)); // 12
```

### 2. `Math.min()`

Gives the **minimum** value among the specified values.

```javascript
console.log(Math.min(10, 11, 12)); // 10
```

### 3. `Math.ceil()`

Gives the **highest** value — performs the ceil (round up) operation.

```javascript
console.log(Math.ceil(10.9)); // 11
console.log(Math.ceil(10.1)); // 11
```

### 4. `Math.floor()`

Gives the **lowest** value — performs the floor (round down) operation.

```javascript
console.log(Math.floor(10.9)); // 10
console.log(Math.floor(10.4)); // 10
```

### 5. `Math.trunc()`

Removes the **decimal value**.

```javascript
console.log(Math.trunc(10.9)); // 10
console.log(Math.trunc(10.1)); // 10
```

### 6. `Math.round()`

Gives the **nearest integer** value.

```javascript
console.log(Math.round(10.9)); // 11
console.log(Math.round(10.4)); // 10
```

### 7. `Math.sqrt()`

Gives the **square root** of the specified value.

```javascript
console.log(Math.sqrt(36)); // 6
console.log(Math.sqrt(4));  // 2
```

### 8. `Math.cbrt()`

Gives the **cube root** of the specified value.

```javascript
console.log(Math.cbrt(8));   // 2
console.log(Math.cbrt(125)); // 5
```

### 9. `Math.random()`

Generates random values between **0 and 1**.

```javascript
console.log(Math.random()); // e.g., 0.1
console.log(Math.random()); // e.g., 0.12345
```

**To generate random values below 100:**

```javascript
let random = Math.random() * 100;
console.log(random); // e.g., 20
console.log(random); // e.g., 35
```
