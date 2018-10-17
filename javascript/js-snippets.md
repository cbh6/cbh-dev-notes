# Clone a JS object except for some keys

I have a flat JS object:
`{a: 1, b: 2, c: 3, ..., z:26}`
I want to clone the object except for one element:
`{a: 1, c: 3, ..., z:26}`

> If you use Babel you can use the following syntax to copy property b from x into variable b and then copy rest of properties into variable y:

```js
let x = { a: 1, b: 2, c: 3, z: 26 };
let { b, ...y } = x;
```

# Counting items in string

This will return an object with each word as a key and the number of ocurrences as value

```js
var phrase = 'hi bye cristian hi cookie';

phrase.split(' ').reduce(function(counter, item) {
  counter[item] = counter.hasOwnProperty(item) ? counter[item] + 1 : 1;
  return counter;
}, {});
```

Result:

```json
{ "hi": 2, "bye": 1, "cristian": 1, "cookie": 1 }
```

# Validating array of emails using Array.every()

Array.every() tests whether all elements in the array pass the test implemented by the provided function.

```js
const emailArray = ['cri.bh6@gmail.com', 'cristian@digio.es'];
const areEmailsValid = emailArray.every(email =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)
);

console.log(areEmailsValid);
```
