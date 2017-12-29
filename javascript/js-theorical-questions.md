# JS theorical Questions

* [typeof js Arrays](#typeof-js-arrays)

## typeof js arrays

[Stackoverflow link](https://stackoverflow.com/questions/12996871/why-does-typeof-array-with-objects-return-object-and-not-array)

**Why does typeof array with objects return “Object” and not “Array”?**

Q:

Why is an array of objects considered an object, and not an array? For example:

```javascript
$.ajax({
    url: 'http://api.twitter.com/1/statuses/user_timeline.json',
    data: { screen_name: 'mick__romney'},
    dataType: 'jsonp',
    success: function(data) {
        console.dir(data); //Array[20]
        alert(typeof data); //Object
    }
});​
```

Answers:

1 -

To add some background, there are two data types in JavaScript:

Primitive Data types - This includes null, undefined, string, boolean, number and object.
Derived data types/Special Objects - These include functions, arrays and regular expressions. And yes, these are all derived from "Object" in JavaScript.
An object in JavaScript is similar in structure to the associative array/dictionary seen in most object oriented languages - i.e., it has a set of key-value pairs.

An array can be considered to be an object with the following properties/keys:

Length - This can be 0 or above (non-negative).
The array indices. By this, I mean "0", "1", "2", etc are all properties of array object.
Hope this helped shed more light on why typeof Array returns an object. Cheers!

2 -

One of the weird behaviour and spec in Javascript is the typeof Array is Object.

You can check if the variable is an array in couple of ways:

```javascript
var isArr = data instanceof Array;
var isArr = Array.isArray(data);
But the most reliable way is:

isArr = Object.prototype.toString.call(data) == '[object Array]';
Since you tagged your question with jQuery, you can use jQuery isArray function:

var isArr = $.isArray(data);
```
