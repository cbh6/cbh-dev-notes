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
