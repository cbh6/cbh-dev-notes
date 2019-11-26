## UI interactions

- Automatic scroll to a certain DOM element -> `document.querySelector('selector').scrollTo({ top: 0, left: 0, behavior: "smooth" })`
- Also available for react elements using refs -> `this.myRef.scrollTo ...`


## Debounce - Throttle

**Debounce**

*The Debounce technique allow us to "group" multiple sequential calls in a single one.*

Imagine you are in an elevator. The doors begin to close, and suddenly another person tries to get on. The elevator doesn't begin its function to change floors, the doors open again. Now it happens again with another person. The elevator is delaying its function (moving floors), but optimizing its resources.


**Throttle**

By using _.throttle, we don't allow to our function to execute more than once every X milliseconds.

The main difference between this and debouncing is that throttle guarantees the execution of the function regularly, at least every X milliseconds.


- Visual example: http://demo.nimius.net/debounce_throttle/
- Explanations: 
  - https://esstudio.site/2019/05/25/all-about-debouncing-and-throttling.html 
  - https://css-tricks.com/debouncing-throttling-explained-examples/

## Array from

- The Array.from() method creates a new, shallow-copied Array instance from an array-like or iterable object.
- It can receive a second argument -> Map function to call on every element of the array
- The mapFn function will receive: value of iterated element as first argument and key as second argument
- Array from can take an object `{length: n}` to set its length

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from

Creating arrays with Array.fill

```
var arr1 = new Array(5).fill(1);
var arr2 = Array(5).fill(1);
```

Using array from and mapFn

```
var arr3 = Array.from(Array(5), () => 1);
var arr4 = Array.from({ length: 5 }, () => 1);
var arr5 = Array.from({ length: 5 }, (_, i) => i + 10);
```

## GIT commands

- `git stash`
- `git stash list`
- `git stash pop` --> Apply and delete last stash
- `git stash clear` --> Remove all stash entries
- `git stash drop stash@{index}` --> Remove a single stash entry from the list of stash entries. When no <stash> is given, it removes the latest one. i.e. stash@{0}, otherwise <stash> must be a valid stash log reference of the form stash@{<revision>}.

## GIT auto crlf warning

In Unix systems the end of a line is represented with a line feed (LF). In windows a line is represented with a carriage return (CR) and a line feed (LF) thus (CRLF). when you get code from git that was uploaded from a unix system they will only have an LF.

If you are a single developer working on a windows machine, and you don't care that git automatically replaces LFs to CRLFs, you can turn this warning off by typing the following in the git command line

`git config core.autocrlf true`

## Angular

- css conditional class

Angular 2,..,7 provides several ways to add classes conditionally:

1. `[class.my-class]="step=='step1'"`
2. `[ngClass]="{'my-class': step=='step1'}"`
3. `[ngClass]="{'my-class': step=='step1', 'my-class2':step=='step2' }"`
4. `[ngClass]="{1:'my-class1',2:'my-class2',3:'my-class4'}[step]"`
5. `[ngClass]="(step=='step1')?'my-class1':'my-class2'"`

---

# Advanced react course notes

## Testing

### Enzyme

#### shallow

- Renderiza un componente. Si este invoca otros componentes en su render(), shallow no los renderiza.
- Testear un componente

#### mount

- interacciones entre componentes
- full dom render
- lifecycle methods
- require full dom api
- necesitas un headless browser

## JS stuff

check if a property exists in an object
```javascript
let cache = {}
if (cache.n)
// or
if (n in cache)
```

## Redux

### redux selectors
reselect library

- mapStateToProps se llama cada vez que se cambie el state incluso si no tiene nada que ver
esto es porque las props que recibe mapStateToProps (el state) es siempre diferente 
aunque los valores sean los mismos.
Cuando actualizamos el estado en el reducer, siempre devolvemos un objeto nuevo...
Esto provoca que el componente que está conectado a redux se re-renderice cada vez que cambia
el estado ya que recibe nuevas props (aunque sean las mismas)

- Según comentan en el vídeo https://www.udemy.com/course/complete-react-developer-zero-to-mastery/learn/lecture/15162906#questions
esto se puede solucionar con memoization y la librería reselect

- Si el output de un selector no cambia, el componente no debe re-renderizarse => MEMOIZATION (caching the selectors value) => RESELECT => WRITE SELECTORS IN SUCH A WAY IT KNOWS THAT IF THE PROPERTIES THAT IS PULLING FROM THE STATE AND USING ARE THE SAME, IN THE SENSE OF THE VALUE HASN'T CHANGED AND THE OUTPUT OF THE SELECTOR IS NOT DIFFERENT THEN IT WONT ACTUALLY PASS THEM INTO OUR COMPONENT AND OUR COMPONENT WONT RERENDER

Memoization --- caching

### redux-persist

- localStorage
- sessionStorage
- yarn add redux-persist
- Let us leverage either local or session storage very easily
- Creates a copy of the store in the localStorage and when user refreshes it checks if there is something in the localStorage and rehydrates the redux state store with the stored one in the localStorage. 
- We can choose which reducers (parts of the global store) want to keep in our localStorage using the 'whitelist' config

### Data normalization

- Storing list of elements inside of an object instead of an array
- Allows to access directly to a certain element by its key instead of searching it using .find (which has more computational cost for huge collections)
- Useful when storing collections where we could need an individual element -> Instead of looping over the collection to find that element, we can retrieve it by its key


**Hash tables vs Arrays**
https://www.kirupa.com/html5/hashtables_vs_arrays.htm


## CSS in JS

- css all share a global namespace
- if two components uses the same className it will collide
- when importing css files in a component and the component gets rendered -> javascript put the styling in the head of our app
- react allows us to have our components separated with their own styles but the rules of css has not changed
- BEM -> naming -> as you start nesting deeper you start more to the name (more specific...)
- BEM is a solution based in how css was created
- We can leverage JS to create the css for us
- styled-components
	- generates a unique css selector for every element, so it will never collide
	- adds an extra layer of complexity
