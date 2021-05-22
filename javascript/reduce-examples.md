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

- Function that return middle values from arrays. Max 4 arrays

```javascript
const getMiddleValues = (...args) => {
    if(args.length > 4) return false;
    if(args.some(e => !Array.isArray(e))) return false;
    
    const result = args.reduce((prev, next) => {
         prev.push(next[parseInt((next.length-1)/2)]);
         return prev;
    } , []);
    return result;
}

getMiddleValues(["hola", "mundo", "102"], ["prueba", "2","goldcar","3", "5"]);
// res output: ["mundo", "goldcar"]
```
