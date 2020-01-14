# Reduce examples

- Count phrase string ocurrences and put them in an object with every word as keys and ocurrences as value

```javascript
const phrase = "cristian dev frontend js cristian"
const res = phrase.split(" ").reduce((prev, next) => {
    prev[next] ? prev[next]++ : prev[next] = 1;
    return prev;
}, {});
// res output: { cristian: 2, dev: 1, frontend: 1, js: 1 };
```

- More examples https://gist.github.com/quangnd/572c6d410cb6512b7f252af0f2eb7cae
