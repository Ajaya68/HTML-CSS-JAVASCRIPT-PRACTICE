# Events

> **Events** are the actions that are performed by either the browser or the user.

## Common Events

| Mouse Events | Key Events | Form Events | Window Events |
|--------------|------------|-------------|---------------|
| `click`      | `keypress` | `submit`    | `load`        |
| `dblclick`   | `keydown`  | `reset`     | `resize`      |
| `mouseup`    | `keyup`    | `focus`     | `scroll`      |
| `mousedown`  |            | `blur`      |               |
| `mouseover`  |            | `change`    |               |
| `mouseout`   |            |             |               |
| `mousemove`  |            |             |               |

## 3 Ways to Attach Events to an HTML Element

### 1. HTML Attributes

Use events as attributes.

```html
<div onclick="alert('Click Event is triggered')"> Div Tag </div>
```

### 2. DOM Properties

Use DOM properties of an element to attach events.

```javascript
div.onclick = fun;

function fun() {
    div.style.cssText = "color: white; background-color: teal; border:1px solid; text-align:center;";
}
```

### 3. `addEventListener()` — the best way

- By using HTML attributes & DOM Properties, we can use **one event only once**.
- By using `addEventListener`, we can attach **multiple functions** to the same event.

```javascript
button.addEventListener("click", () => {
    console.log("Click Event is Triggered");
});
```

## Removing an event

If we need to remove the event from an element, we can use **`removeEventListener`**.

```javascript
button.addEventListener("click", greet);

function greet() {
    console.log("Hi Hello How are you?");
}

button.removeEventListener("click", greet);
```
