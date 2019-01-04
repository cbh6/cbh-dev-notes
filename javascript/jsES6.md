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
