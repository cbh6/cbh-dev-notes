## Promisify timeout

```javascript
const MS_WAITING_TO_TIMEOUT = 2000;

const timeout = new Promise(resolve => {
  setTimeout(resolve, MS_WAITING_TO_TIMEOUT);
});

timeout.then(async () => {
  // Execute some code
  console.log('Hi all !');
});
```

## delay function using promises and setTimeout

```javascript
const later = (delay, value) =>
  new Promise((resolve, _reject) => {
    setTimeout(() => resolve(value), delay);
  });
```

or even

```javascript
const later = (delay, value) =>
  new Promise((resolve, _reject) => {
    setTimeout(resolve, delay, value);
  });
```

setTimeout 3rd param -> Additional parameters to pass to the function
