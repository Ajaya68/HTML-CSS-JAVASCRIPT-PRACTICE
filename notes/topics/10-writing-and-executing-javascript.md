# How to Write and Execute JavaScript

There are **two ways** to execute JavaScript:

## 1. Directly in the browser console

Open any browser → press `F12` → go to the `Console` tab → type JavaScript code directly.

## 2. Embedding it in an HTML page

### (a) Internal JavaScript — using the `<script>` tag

```html
<html>
    <head>
        <title>Document</title>
    </head>
    <body>
        <script>
            console.log("Hello World !!");
        </script>
    </body>
</html>
```

### (b) External JavaScript — separate `.js` file

Create a separate file with the `.js` extension, then link it with the `src` attribute of the `<script>` tag.

```html
<html>
    <head>
        <title>Document</title>
    </head>
    <body>
        <script src="fileName.js"></script>
    </body>
</html>
```

## The `defer` attribute

**`defer`** holds the execution of the JavaScript file until the **complete HTML is loaded**. It works with **external JavaScript only**.
