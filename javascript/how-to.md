# How To - Questions about how to do something in JS

* [Capitalize first letter](#capitalize-first-letter)

## Capitalize first letter

Here are the fastest methods based on this [jsperf](https://jsperf.com/capitalize-the-first-letter-of-string-in-javascript/2) test (ordered from fastest to slowest).

The first two methods are essentially comparable in terms of performance, whereas altering the String.prototype is by far the slowest in terms of performance

```javascript
// 10,889,187 operations/sec
function capitalizeFirstLetter(string) {
  return string[0].toUpperCase() + string.slice(1);
}

// 10,875,535 operations/sec
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// 4,632,536 operations/sec
function capitalizeFirstLetter(string) {
  return string.replace(/^./, string[0].toUpperCase());
}

// 1,977,828 operations/sec
String.prototype.capitalizeFirstLetter = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
};
```
