# React's memoization

https://epicreact.dev/memoization-and-react/?utm_source=pocket-chrome-recs

> React has three APIs for memoization: `memo`, `useMemo`, and `useCallback`. The caching strategy React has adopted has a size of 1. That is, they only keep around the most recent value of the input and result

## React.memo

```
// React.memo's `prevInput` is props and `prevResult` is react elements (JSX)
const MemoComp = React.memo(Comp)
// then, when you render it:
<MemoComp prop1="a" prop2="b" /> // renders new elements
// rerender it with the same props:
<MemoComp prop1="a" prop2="b" /> // renders previous elements 🤓
// rerender it again but with different props:
<MemoComp prop1="a" prop2="c" /> // renders new elements
// rerender it again with the same props as at first:
<MemoComp prop1="a" prop2="b" /> // renders new elements
```


## Difference between useMemo and useCallback

- useMemo returns/cache the returned value of the function
- useCallback returns/cache the returned function instead

Example

```
// React.useMemo's `prevInput` is the dependency array
// and `prevResult` is whatever your function returns
const posts = React.useMemo(() => getPosts(searchTerm), [searchTerm])
// initial render with searchTerm = 'puppies':
// - getPosts is called
// - posts is a new array of posts
// rerender with searchTerm = 'puppies':
// - getPosts is *not* called
// - posts is the same as last time 🤓
// rerender with searchTerm = 'cats':
// - getPosts is called
// - posts is a new array of posts
// rerender render with searchTerm = 'puppies' (again):
// - getPosts is called
// - posts is a new array of posts

```

```
// React.useCallback's `prevInput` is the dependency array
// and `prevResult` is the function
const launch = React.useCallback(() => launchCandy({type, distance}), [
  type,
  distance,
])
// initial render with type = 'twix' and distance = '15m':
// - launch is equal to the callback passed to useCallback this render
// rerender with type = 'twix' and distance = '15m':
// - launch is equal to the callback passed to useCallback last render 🤓
// rerender with same type = 'twix' and distance '20m':
// - launch is equal to the callback passed to useCallback this render
// rerender with type = 'twix' and distance = '15m':
// - launch is equal to the callback passed to useCallback this render
```

## The value of memoization in React
There are two reasons you might want to memoize something:

1. Improve performance by avoiding expensive computations (like re-rendering expensive components or calling expensive functions)
2. Value stability
