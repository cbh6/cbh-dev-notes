## UI interactions

- Automatic scroll to a certain DOM element -> `document.querySelector('selector').scrollTo({ top: 0, left: 0, behavior: "smooth" })`
- Also available for react elements using refs -> `this.myRef.scrollTo ...`


## Debounce - Throttle

**Debounce**

*The Debounce technique allow us to "group" multiple sequential calls in a single one.*

Imagine you are in an elevator. The doors begin to close, and suddenly another person tries to get on. The elevator doesn't begin its function to change floors, the doors open again. Now it happens again with another person. The elevator is delaying its function (moving floors), but optimizing its resources.


**Throttle**

By using _.throttle, we don't allow to our function to execute more than once every X milliseconds.

The main difference between this and debouncing is that throttle guarantees the execution of the function regularly, at least every X milliseconds.


- Visual example: http://demo.nimius.net/debounce_throttle/
- Explanations: 
  - https://esstudio.site/2019/05/25/all-about-debouncing-and-throttling.html 
  - https://css-tricks.com/debouncing-throttling-explained-examples/

## Array from

- The Array.from() method creates a new, shallow-copied Array instance from an array-like or iterable object.
- It can receive a second argument -> Map function to call on every element of the array
- The mapFn function will receive: value of iterated element as first argument and key as second argument
- Array from can take an object `{length: n}` to determinate its length

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from

Creating arrays with Array.fill

```
var arr1 = new Array(5).fill(1);
var arr2 = Array(5).fill(1);
```

Using array from and mapFn

```
var arr3 = Array.from(Array(5), () => 1);
var arr4 = Array.from({ length: 5 }, () => 1);
var arr5 = Array.from({ length: 5 }, (_, i) => i + 10);
```
