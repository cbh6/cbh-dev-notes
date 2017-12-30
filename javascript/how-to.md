# How To - Questions about how to do something in JS

* [Capitalize first letter](#capitalize-first-letter)
* [Clone javascript object](#clone-javascript-object)

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

## Clone javascript object

How do I correctly clone a JavaScript object?

> I have an object, x. I'd like to copy it as object y, such that changes to y do not modify x. I realized that copying objects derived from built-in JavaScript objects will result in extra, unwanted properties. This isn't a problem, since I'm copying one of my own, literal-constructed objects.

In ECMAScript 6 there is [Object.assign](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign) method, which copies values of all enumerable own properties from one object to another. For example:

```javascript
var x = { myProp: "value" };
var y = Object.assign({}, x);
```
