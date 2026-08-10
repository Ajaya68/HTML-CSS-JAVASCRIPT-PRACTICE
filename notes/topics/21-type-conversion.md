# Type Conversion

> **Type conversion (or typecasting)** means transferring data from one data type to another.

## 1. Implicit Type Conversion

Implicit conversion happens when the **compiler or runtime automatically** converts data types.

```javascript
5 - "3"  // 2    (the string "3" is converted to a number)
5 + "3"  // "53" (the number 5 is converted to a string → concatenation)
```

## 2. Explicit Type Conversion

Conversion from one data type to another **knowingly** — it might lead to data loss.

### Converting to Number

```javascript
Number("123");       // 123
parseInt("10.5");    // 10
parseFloat("10.5");  // 10.5
```

### Converting to String

```javascript
String(123);        // "123"
(123).toString();   // "123"
```

### Converting to Boolean

```javascript
Boolean(0);  // false
Boolean(1);  // true
Boolean(""); // false
Boolean("Hi"); // true
```
