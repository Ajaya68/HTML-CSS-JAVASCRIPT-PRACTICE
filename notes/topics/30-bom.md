# Browser Object Model (BOM)

> The **Browser Object Model (BOM)** allows us to communicate with browsers.
> The browser is always indicated by the **`window`** object.
> Inside `window`, we have many object models like `document`, `screen`, `navigator`, and `location`.

## Window Properties

1. `document`
2. `screen`
3. `history`
4. `navigator`
5. `location`
6. `innerHeight`
7. `outerHeight`
8. `innerWidth`
9. `outerWidth`

| Property | Meaning |
|----------|---------|
| `document` | Always represents the current HTML document. By using this, we can make changes in the HTML document. |
| `screen` | Provides basic information about the screen like height, width, orientation, etc. |
| `history` | Keeps a track of web pages you opened and stores them as history. We can perform `forward()`, `back()` operations using this. |
| `navigator` | Provides information about the browser like `appName`, `appVersion`, etc. |
| `location` | Provides basic information about the current location like `path`, `hostname`, `href`, etc. |
| `innerHeight` | Calculates the browser height **excluding** the console area. |
| `outerHeight` | Calculates the browser height **including** the console area. |
| `innerWidth` | Calculates the browser width **excluding** the console area. |
| `outerWidth` | Calculates the browser width **including** the console area. |

## Window Methods

1. `prompt()`
2. `alert()`
3. `confirm()`
4. `open()`
5. `close()`
6. `setTimeout()`
7. `setInterval()`
8. `clearTimeout()`
9. `clearInterval()`

| Method | Purpose |
|--------|---------|
| `prompt()` | Helps to take user input. Displays a popup message in the browser. |
| `alert()` | Displays a popup message with a button **OK**. |
| `confirm()` | Displays a popup message with **OK** and **CANCEL** buttons. |
| `open()` | Helps to open a new webpage. |
| `close()` | Allows us to close the current webpage. |
| `setTimeout(callback, timeout)` | Holds the execution until the completion of time. |
| `setInterval(callback, interval)` | Performs the same task multiple times with a time gap of interval time. |
| `clearTimeout()` | Stops the working of the `setTimeout()` method. |
| `clearInterval()` | Stops the working of the `setInterval()` method. |
