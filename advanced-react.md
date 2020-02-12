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

## Data normalization

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
	
## React HOC

- https://github.com/ZhangMYihua/higher-order-components-explained
- Functions that wrapps and extends another component with any particular functionality
- Definition: A higher-order component in React is a pattern used to share common functionality between components without repeating code. A higher-order component is actually not a component though, it is a function . A HOC function takes a component as an argument and returns a component

## redux-thunk

- Allows us to have asynchronous actions
- Is a middleware that injects (dispatch) and (getState) in the dispatched actions that are functions (not objects)
- https://www.udemy.com/course/complete-react-developer-zero-to-mastery/learn/lecture/15213926#overview
- We can then dispatch any other actions inside our async action creator
- https://platzi.com/blog/como-funciona-redux-thunk/
- If redux-thunk middleware is enabled, any time you attempt to dispatch a function instead of an object, the middleware will call that function with dispatch method itself as the first argument.



## React container pattern

- Continers don't render anything. They just pass props down to components
- react -> compose : when you want to use multiple hoc at the same time
- `connect(mapStateToProps)(withSpinner(MyComponent)` is the same as `compose(connect(mapStateToProps), withSpinner)(MyComponent)`
- more readable


## React sagas

-Its a function that conditionally runs. The condition that it depends on when it runs is based on whether or not a specific action is coming into the saga middleware.
- Multiple sagas can be listeting for multiple different actions or the same actions
- Code that won't run until they hear the action that they are listening for
- They can do all kinds of logic: trigger other actions which go back into our middleware and continue into our reducers so other sagas can also be listening for actions that come out of sagas, or they can render any kind of additional API logic right. They can go to the back and fetch some data and user that data to dispatch actions to update reducers...

- Pure/Impure functions
```javascript
// Pure: No matter how many times you call this fn, it will
// always return the same output
const addNumbers = (a,b) => a + b;
// Impure
let number = 8;
const addNumbers = (a,b) => num + a + b; 
```

- API calls inside of componentDidMount() are impure, it has side effects. They don't always return the same output given the same input
- Any async activity that happens inside our app that is not related to our component state but rather posibily related to the app as a whole, or some part of the app should be moved into a saga.
- Gives large more responsability to redux beyond of storing state
- Handles async impure side effecs

- **Before we continue, I would like to make one quick correction about when Sagas fire in our redux flow. In the previous video I mentioned that sagas fire before reducers, it's actually the other way around! Reducers fire first, then sagas receive the action. From there, sagas can fire off new actions which in turn hit the reducers and other sagas as well!

- function generators: a fn that reasembles async await. Async/await is actually built on top of generators
```javascript
function* gen(i) {
	yield i;
	yield i + 10;
	return 25;
}	
```

- Concurrently: It doesn't block the entire execution

**... more notes to be added when the course section is finished**

## React Hooks

- If you want to learn more about why the React team decided to add Hooks to the library, you can find the motivation behind their decision right from their mouth https://reactjs.org/docs/hooks-intro.html#motivation

### Effect hook

https://reactjs.org/docs/hooks-effect.html

The Effect Hook lets you perform side effects in function components

- This happens for every render, including the first one.


```
useEffect(() => {
  document.title = `You clicked ${count} times`;
}, [count]); // Only re-run the effect if count changes
```

- useEffect fires only 1 time when the component mounts -> pass an empty array 
- componentDidMount with fetch call
- we cannot set async to the anonymous function because useEffect only wants function. And async is making an async object from our function

```
useEffect(() => {
	const fetchFunc = async() => {
		const response = await fetch(url);
		const resJson = response.json();
		setUser(resJson[0]);
	}

	fetchFunc();
}, []);
```
