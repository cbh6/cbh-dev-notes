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

- Array.from() alternative. Spread operators can be used to transform a NodeList (for example, or any Iterable type) to a true Array. Array.from() is more readable tho.

- Delete array elements

```
const elements = ['c','r','i', 's'];
const indexToDelete = 1;

const newArray =  [...elements.slice(0, indexToDelete), ...elements(indexToDelete + 1)];
```

- Spread into a function: Push array elements inside another array

```
const elements = [1,2,3,4];
const new = [6,7];

elements.push(...new);
```

- **Rest param in functions**

```
function convertCurrency(rate, ...amounts) {
  console.log(rate, amounts);
}

convertCurrency(1.54, 23, 34, 1); // 1.54 [23, 34, 1]
```

- Rest param

```
const runner = ['Wes', 'cbhId123', 4, 10, 15, 3];
const [name, id, ...runs] = runner;

console.log(name, id, runs); // 'Wes' 'cbhId123' [4, 10, 15, 3]
```

# Object literals

 ```
 const key = 'color';
 const value = 'yellow';
 const tShirt = {
   [key]: vlaue
 };

 console.log(tShirt); // { color: 'yellow'}
 ```

- You can use javascript to compute key names (in this case, a template string. But also function calls or whatever js is allowed)

 ```
 const tShirt = {
   [`${key}Opposite`]: invertColor(value)
 }
 ```

- Using array as key and value with Array.shift()

```javascript
const keys = ['size', 'color', 'weight'];
const values = ['medium', 'red', 100];

const shirt = {
  [keys.shift()]: values.shift(),
  [keys.shift()]: values.shift(),
  [keys.shift()]: values.shift(),
}

console.log(shirt); // {color: 'red', size: 'medium', weight: 100}
```

# Promises

- Used for fetching json apis, ajax calls.
- Something that will happen between now and the end of time
- Something that will happen in the future but probably not inmediatelly
- fetch api returns a promise. 
- We can use then() to execute code as soon as the promise successfully comes back
- We can use catch() to catch any errors that happens.
  
```javascript
const postsPromise = fetch('http://myapi.com/posts);

postsPromise
  .then(data => data.json())
  .then(data => { console.log(data) })
  .catch((err) => {
    console.error(err);
  })
```

- If you dont catch your promise errors and an error occurs, it will throw `Uncaught (in promise)` error.
- Creating your own Promises

```javascript
const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Hey!);
  }, 1000);
});

p.then(data => console.log(data)); // After 1 second, 'Hey!';
```

# Javascript modules and more

- import is not supported by browsers yet. That's why we use babel and webpack to transpile and bundle all our packages in one bundle file from ES6 to ES5.
- webpack.config.js

**Bundlers:**

- Rollup
- SystemJS
- Webpack
- Browserify

**SystemJS**

- SystemJS can be ran in the browser. It runs on top of npm and we don't need to npm install dependencies: jspm.
- All you need is to configure SystemJS in your HTML and import whatever js local module/npm dependency.
- This is usefull for quick projects where we want to avoid all the necessary configuration webpack and others involve.
- A great way to know how modules work in Javascript. 
- Not good for production purposes.
- browser-sync for setting up a little server


**Babel**

- You only need webpack/browserify/systemjs... when using modules. If not, we can use babel. A simpler setup.
- babel plugins
- babel presets: a collection of plugins
- babel-preset-env:

> @babel/preset-env is a smart preset that allows you to use the latest JavaScript without needing to micromanage which syntax transforms (and optionally, browser polyfills) are needed by your target environment(s). This both makes your life easier and JavaScript bundles smaller!

- babel configs: .babelrc or in package.json
- babel-preset-react


**Polyfills**

- polyfill.io -> used with `<script>` tag. Detects your browser via user-agent and adds the needed polyfills
- MDN polyfills
- babel polyfills -> `npm install --save-dev babel-polyfill` and `import "babel-polyfill"` when using modules

# Classes

- The only necessary method to create a class is the constructor
- static methods. Only callable from the class, not the instances.
- get & sets

```javascript
class Dog {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  static info() {
    console.log('Dogs are better than cats');
  }

  get description() {
    return `${this.name} has ${this.age} years old`;
  }
  set nick(value) {
    this.nick = value.trim();
  }
  get nick() {
    return this.nick;
  }
}
```
- class inheritance
- extends
- super() -> call the constructor 'thing' we are extending
- In the constructor of the extended class, super() is needed in order to access to this to assign extended properties.

```javascript
class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
}
```

- We can extend native things like **Array**
- [example](https://github.com/wesbos/es6.io/blob/master/15%20-%20Classes/extending-arrays.html)

# Generators

- A generator is a function that can stop midway and then continue from where it stopped. In short, a generator appears to be a function but it behaves like an iterator. [more info](https://codeburst.io/understanding-generators-in-es6-javascript-with-examples-6728834016d5)
- *
- `yield` -> return for now. Return something until the function is called again
- generators are called with next
- async/await is based on generators

```javascript
function* listPeople() {
  yield 'cbh6';
  yield 'crs1';
}
```

- to call the generator we need to store the function in a variable

```javascript
const people = listPeople();

people.next(); // returns an object {value: "cbh6", done: false}
```

- generators are functions that offer multiple returns
- generator functions keep their scoped variables until the generator is done
- [more examples](https://github.com/wesbos/es6.io/blob/master/16%20-%20Generators/generators.html)
- whatever you pass in the generator next() call can be stored in a variable. `const result = yield whateverFunc()`. When the yield result comes back, it gets stored.
- handy for syncish api calls
- [example using api calls](https://github.com/wesbos/es6.io/blob/master/16%20-%20Generators/generators-syncish-ajax.html)
- we can use `for of` to loop over the generator. No `next()` calls are needed 

# Proxies

- Proxies allow you to override the default behaviour from many of an object's default operations 
- In objects you can get/set things, delete properties, etc.
- There's a bunch of methods that come along with objects
- What if you want to override some of these methods/properties?
- -> Proxies: **override the default behaviour of an operation on an object.**

- [MDN docs](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Proxy)
- `new Proxy(object, handler)`
- The first param is the object target, the second is where you specify all the operations you want to override
- These operations you can override are called *traps*
  
- Basic example
```javascript
  const person = { name: 'Wes', age: 100 };
  const personProxy = new Proxy(person, {
    get(target, name) {
      return target[name].toUpperCase();
    },
    set(target, name, value) {
      if(typeof value === 'string') {
        target[name] = value.trim().toUpperCase() + '✂️';
      }
    }
  });
  personProxy.name = 'Wesley';
```

- Phone numbers example
```javascript
  const phoneHandler = {
    set(target, name, value) {
      target[name] = value.match(/[0-9]/g).join('');
    },
    get(target, name) {
      return target[name].replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
    }
  }
  const phoneNumbers = new Proxy({}, phoneHandler);
```

- Proxies are handy for writing libraries

## Objects

- Check if object has a property
```javascript
const phones = {
  home: "123123123",
  work: "789789789"
}

console.log("work" in phones); // true
console.log("personal" in phones); // false
```

# Sets

- Like an unique array.
- You can add the same item once
- A nice API to manage the items inside of it
- Is not index based
- Is a list of items which we can add to, remove from and loop over

**Methods**

- new Set() . We can pass an array to initialize
- set.size()
- set.entries()
- set.keys()
- set.clear()
- set.add()
- set.has()
- set.values()
- 
**Looping over**

- We can loop over the set using for of
```javascript
for(const person of peopleSet) {
  console.log(person);
}
```
- Or we can manually loop over using next()
- `.values()` and `.keys()` gives us a SetIterator -> We can use `.next()` to iterate. Same as generators.


- If we use a variable to store `.values()` and `.next()` to iterate over them. We can still add items to the original set and the *values* variable is going to have them when calling next.

# WeakSets

- Is just like a set with limitations
- Can only contain objects
- We can not loop over it
- There is no clear method
- Weaksets sort of clean themselves
- When one of the objects is no longer on its memory reference, it will be automatically taken out from the WeakSet by its garbage collector.

# Maps

- Sets are to arrays, maps are to objects.
- They work similar like sets but they have **keys** and **values**.
  
**Methods**

- map.get(key)
- map.has(key)
- map.delete(key)
- map.clear()

**Looping over**

- You can loop over in two ways
- `foreach` -> `map.forEach((value, key) => console.log(value, key))`
- `for of` -> `for (const item of map) console.log(item)` : The interesting thing about for of is that each `item` is going to be an array containing the key and the value. 
- With for of you can use array destructuring instead -> `for (const [key, val] of map) console.log(key, val)`

- Maps are handy for metadata dicctionary
- You can use an object as the key in a map.
- You can also use a DOM Elements as the key.

- [Example: Button click count metadata](https://github.com/wesbos/es6.io/blob/master/19%20-%20Maps%20and%20WeakMaps/maps-metadata.html)

```html
<body>

<button>Snakes 🐍</button>
<button>Cry 😂</button>
<button>Ice Cream 🍦</button>
<button>Flamin' 🔥</button>
<button>Dancer 💃</button>

<script>
  const clickCounts = new Map();
  const buttons = document.querySelectorAll('button');
  buttons.forEach(button => {
    clickCounts.set(button, 0);
    button.addEventListener('click', function() {
      const val = clickCounts.get(this);
      clickCounts.set(this, val + 1);
      console.log(clickCounts);
    });
  });
</script>
</body>
```

# WeakMap

- Same as WeakSet
- Doesnt have a size
- Is not enumerable (we can not loop over)
- If an item is no longer present in the memory reference, it wil be garbage collected