# Closure and Currying

## Closure

- Whenever a **nested function requires the variable of the parent function**, the JS Engine creates **closures**.
- Closures are **held by the child function**.
- Closures hold **only the required variables**.

```javascript
function Bank() {
    var balance = 50000;   // parent variable

    function Deposit() {   // child function needs 'balance'
        var amount = Number(prompt("Enter amount:"));
        return amount + balance;
    }
    return Deposit;
}
```

## Currying

- It is the process of **invoking the nested functions along with the parent function**.
- In the above example, `Bank()()` is called **currying**.

```javascript
console.log(Bank()()); // calls Bank, then calls the Deposit function
```
