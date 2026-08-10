# Working of the JS Engine

The JavaScript Engine converts JavaScript code into something the browser can understand and run.

## The Engine consists of two main components:

1. **Memory Heap** — this is where the **memory allocation** happens.
2. **Call Stack** — this is where your **stack frames** are as your code executes.

```
JavaScript Code
     │
     ▼
 ┌─────────────────┐
 │   JS Engine     │
 │  ┌───────────┐  │
 │  │ Memory    │  │  → memory allocation
 │  │ Heap      │  │
 │  └───────────┘  │
 │  ┌───────────┐  │
 │  │ Call      │  │  → stack frames of running code
 │  │ Stack     │  │
 │  └───────────┘  │
 └─────────────────┘
```

> 💡 **Simple analogy:** The *Heap* is like a big warehouse where all the data lives; the *Call Stack* is like a to-do list of functions waiting to run.
