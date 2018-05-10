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
{ hi: 2, bye: 1, cristian: 1, cookie: 1 }
```

# Validating array of emails using Array.every()

Array.every() tests whether all elements in the array pass the test implemented by the provided function.

```js
const emailArray = ['cri.bh6@gmail.com', 'cristian@digio.es']
const validEmails = emailArray.every(email => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email));

console.log(validEmails);
```


