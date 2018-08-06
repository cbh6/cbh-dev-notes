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
