# Javascript ES6

## Var, Let and Const

- var variables -> function scoped function() {}
global scoped in windows if var wasnt created in a function
- let and const are block scoped. {}
- let and const can be declared one time in the same scope
- const cannot be updated
- let can be updated
- properties of const object variable can be updated. But you cant reassign the entire object
- you can Object.freeze to disallow updating properties from the object
- Temporal dead zone: let & const cant be accessed until are declared. var variables will throw 'undefined' instead of an error
- use const by default
- only use let if rebinding is needed
- var shouldn't be used in ES6


## Arrow functions

- implicit return
- more concise
- it doesn't rebind the value of this
- arrow functions are anonymous
- arrow functions are not always useful. Always have in mind that this is not being rebinded when using arrow functions.
- switch variable values in ES6

```javascript
let first = 'hey';
let second = 'bye';

console.log(first, second); // 'hey' 'bye'

[first, second ] = [second, first];

console.log(first, second); // 'bye' 'hey'
``` 

- arguments is a javascript keyword that gives us an array of received arguments. It doesn't work for arrow functions.

# Template strings

- Nesting

```javascript
const dogs = [
  { name: 'Snickers', age: 2 },
  { name: 'Hugo', age: 8 },
  { name: 'Sunny', age: 1 },
];

const markup = `
  <ul>
    ${dogs.map(dog => `<li>${dog.name}</li>`)}
  </ul>
`;

document.body.innerHTML = markup;
```

- Functions that return template strings can also be called inside template strings. This is useful to structure & modularize.
- With if statement inside the template string

```javascript
const dogs = [
  { name: 'Snickers', age: 2, },
];

const markup = `
  <ul>
    ${dogs.map(dog => `<li>${dog.name} ${dog.age ? `(Age: ${dog.age})` : ''}</li>`)}
  </ul>
`;

document.body.innerHTML = markup;
```

- debugger: putting `debugger` in any function will automatically 
stops browser execution at this point.
- tagged template literals: you can define a function which will
decide how will be the template string result.

[examples](https://github.com/wesbos/es6.io/tree/master/03%20-%20Template%20Strings)

- sanitize strings [DOMPurify](https://github.com/cure53/DOMPurify)

# New String methods

- startsWith(compareString, afterIndex)
- endsWith(compareString, characterNumbersFromStart)
- includes(string)
- repeat(string) 

# Destructuring

[Course examples](https://github.com/wesbos/es6.io/tree/master/05%20-%20Destructuring)

- Destructuring objects

```javascript
const me = { name: 'Cristian', age: 25 };
const { name, age } = me;
```

- Rename destructured variables

```javascript
const me =  {
  name: 'cristian',
  age: 25
}

const { name:n, age:a } = me;
```

- Default values when destructuring

```javascript
const settings = { height: 100, color: 'black' };
const { height = 50, width = 50, color: 'white' };
```

- Default values + renaming

```javascript
const settings = { height: 100, color: 'black' };
const { height: h = 50, width: w = 50, color: 'white' };
```

- Destructuring arrays

```javascript
const me = ['cristian', 25, '@cbh6'];
const [ name, age, github ] = me;

const data = "hamburguer,15,3";
const [ foodItem, prize, number ] = data.split(",");

// using rest operator
const team = ['wes', 'harry', 'sarah', 'keegan'];
const [captain, assistant, ...players] = team;
```

- Swap variables using array destructuring

```javascript
let inRing = 'Hulk Hogan';
let onSide = 'The Rock';

[inRing, onSide]= [onSide, inRing];
```

# Iterables & Looping

[Examples](<https://github.com/wesbos/es6.io/tree/master/06%20-%20Iterables%20%26%20Looping>)

Iterable: anything that can be looped over: Array, String, Map, Set ...

- **for of**: used to loop over any type of data that isn't iterable

- **forEach**: downside: cannot abort or skip one of the ones. break is not allowed inside a foreach. same with continue.

- **for in**: loops over the index. It iterates over absolutely everything in the array, including things that have been added to the prototype.

- **for of**: loop over any type except objects. Allows break and continue. Does not iterate over things added to the prototype, and iterates over values, not index. Gives us the best from all other kind of looping.

- `array.entries()`, gives us the ArrayIterator to iterate manually
- Get index from for of: array.entries()

```
for (const [i, cut] of cuts.entries()) {
  console.log(i, cut);
}
```

**You can use for of in most of the cases except for objects:**

- Iterate over function arguments

- Iterate over a string

- DOM collections

- Objects: Using Object.keys(myobj) and iterating them

- For Objects is more recommended to use for in. For ES2017 there is a proposal for Object.entries().





## Array .from() & .of()

.from()

- Transform whatever arrayish and transforms it in a true array.
- Not in the prototype. So you cant 

```
const ages = [12,23,54];
ages.from()...
```

in the Array itself

```
Array.from(ages);
```

Useful with DOM elements (NodeList)

```
const people = document.querySelectoAll('p');
const peopleArray = Array.from(people);
peopleArray.map(....
```

You can pass a function callback to Array.from()

```
const peopleArray = Array.from(people, person => return person.textContent);
```

- Array.from() is usefull to transform function arguments to an array

```
function sumAll() {
  const nums = Array.from(arguments);
  return nums.reduce((prev, next) => prev + next, 0);
}

sumAll(33,44,55,66);
```

- Array.of(), returns an array with every element passed

```
const nums = Array.of(1,2,3,4);
```

## Array.find() & .findIndex()

- For finding elements in object arrays by property `const post = posts.find(post => post.code === 'abcd1234')`

This will return the first one that matches

- For finding multiple elements -> Array.filter()

- For finding the index of an specific element: `const postIndex = posts.findIndex(post => post.code === 'abcd1234')`

# Spread operator

- Any iterable element can be spreaded (Array, String, arguments object, NodeList...)

```
console.log([...'cristian']);
// ['c','r','i','s','t','i','a','n']
```

- Concat arrays 

```
const a = [1,2,3];
const b = [5,6,7];

const z = [...a, 4, ...b];
console.log(z); // [1,2,3,4,5,6,7]
```

- Copy arrays

```
const a = [1,2,3]
const copy = [...a];
```

if copy is modified, a wont be overwritten.