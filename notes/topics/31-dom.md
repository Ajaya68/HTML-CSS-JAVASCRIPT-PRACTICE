# Document Object Model (DOM)

> **DOM** stands for **Document Object Model**.
> DOM is a programming interface to communicate between the **document** and **JavaScript**.
> The document always represents the HTML code of a web page.
> By using the DOM, we can manipulate the HTML tags, HTML attributes, and CSS properties.
> Whenever the webpage reloads, it creates a document which is stored as a **tree-like structure**.

## DOM Selectors

Selectors are used to **target HTML elements** in the document.

| Selector | Targets by | Returns |
|----------|-----------|---------|
| `getElementById()` | id name | only the **first matching** element |
| `getElementsByClassName()` | class name | **all matching** elements (HTML collection) |
| `getElementsByTagName()` | tag name | **all matching** elements (HTML collection) |
| `getElementsByName()` | name attribute | **all matching** elements (NodeList) |
| `querySelector()` | id / class / tag | only the **first matching** element |
| `querySelectorAll()` | id / class / tag | **all matching** elements |

```javascript
document.getElementById("idName");
document.getElementsByClassName("className");
document.getElementsByTagName("tagName");
document.getElementsByName("name");
document.querySelector("#idName / .className / tagName");
document.querySelectorAll("#idName / .className / tagName");
```

> ⚠️ **NOTE:** Some of the above selectors return a **collection**. These collections are **not actual arrays** — they are *array-like collections*. We can perform indexing & iteration, but **not** array methods like `push`, `pop`, `shift`, `unshift`, etc.

## CRUD on HTML Elements

### 1. `createElement()`

Creates a new element.

```javascript
let div = document.createElement("div");
```

### 2. `append()`

Appends content or a node into the parent element.

```javascript
section.append("This is Text Information");
section.append(div);
```

### 3. `appendChild()`

Appends **only nodes** into the parent element.

```javascript
section.appendChild(div);                        // ✅
section.appendChild("This is Text Information");  // ❌ Error (must be a node)
```

### 4. `textContent` / `innerText` / `innerHTML`

All three update content in an element. `textContent` and `innerText` are similar. `innerHTML` allows us to use HTML tags.

```javascript
div.textContent = "This is content";
div.innerText = "This is content";
div.innerHTML = "<b>This is content</b>";
```

### 5. `replaceChild()`

Replaces a node in a document with a new node.

```javascript
parent.replaceChild(newNode, prevNode);
section.replaceChild(h1, div);
```

### 6. `removeChild()`

Removes a node from the element.

```javascript
parent.removeChild(nodeName);
section.removeChild(h1);
```

## CRUD on HTML Attributes

### 1. `setAttribute()`

Adds a new attribute to the element. If the attribute is already present, it **updates** the attribute value.

```javascript
div.setAttribute("id", "demo");
```

### 2. `getAttribute()`

Returns the attribute value of an element.

```javascript
div.getAttribute("id"); // demo
```

### 3. `removeAttribute()`

Removes an existing attribute of an element.

```javascript
div.removeAttribute("id");
```

## CRUD on CSS Properties

### 1. `setProperty()` / `propertyName` / `cssText`

All are used to add CSS properties to an element.

- By using `setProperty` and `propertyName`, we can add **only one** property at a time.
- By using `cssText`, we can add **multiple** properties at a time.
- It works as **inline style** only.

```javascript
div.style.setProperty("font-size", "40px");
div.style.fontSize = "40px";
div.style.cssText = "font-size: 40px; color: teal;";
```

### 2. `getPropertyValue()`

Gets the value of a property of an element.

```javascript
div.style.getPropertyValue("font-size");
```

### 3. `removeProperty()`

Removes a CSS property of an element.

```javascript
div.style.removeProperty("font-size");
```
