# Counting items in string

This will return an object with each word as a key and the number of ocurrences as value 

```js
var phrase = "hi bye cristian hi cookie"

phrase.split(" ").reduce(function (counter, item) {
	counter[item] = counter.hasOwnProperty(item) ? counter[item] + 1 : 1;
	return counter;
}, {});
```

Result:

```json
{hi: 2, bye: 1, cristian: 1, cookie: 1}
```