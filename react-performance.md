# React performance

- Performance optimizations ALWAYS come with a cost but do NOT always come with a benefit
- You must consider the tradeoffs when making optimizations
- You only want to make performance optimization improvements when you hit a problem
- Specifically the cost for useCallback and useMemo are that you make the code more complex for your co-workers, you could make a mistake in the dependencies array, and you're potentially making performance worse by invoking the built-in hooks and preventing dependencies and memoized values from being garbage collected. Those are all fine costs to incur if you get the performance benefits necessary, but it's best to measure first.
- React performance cheatsheet https://houssein.me/progressive-react

## Code splitting CRA

- https://es.reactjs.org/docs/code-splitting.html
- https://es.reactjs.org/docs/concurrent-mode-suspense.html

- page level components -> routes
- dynamic import with lazy
- wrap route with suspense

### React.lazy and Suspense
- La función React.lazy te deja renderizar un import dinámico como un componente regular.
- El componente lazy debería entonces ser renderizado adentro de un componente Suspense, lo que nos permite mostrar algún contenido predeterminado (como un indicador de carga) mientras estamos esperando a que el componente lazy cargue.
El prop fallback acepta cualquier elemento de React que quieras renderizar mientras esperas que el Component cargue
- División de código basada en rutas
- Suspense permite que tus componentes “esperen” por algo antes de que se puedan renderizar.

### Error Boundaries
- https://reactjs.org/docs/error-boundaries.html
- Necesitamos además, el uso de Error Boundaries para mostrar algún tipo de componente en caso de que mientras Suspense espera la carga de un componente importado dinámicamente, la conexión falle o haya algún tipo de problema.
- Error boundary será componente que capturará cualquier tipo de error y mostrará un mensaje.
- Podemos envolver <Suspense> y <Route> con <ErrorBoundary>, en ese caso, ante cualquier problema podemos renderizar un componente que muestre al usuario que ha habido algún problema.
- https://www.kapwing.com/404-illustrations?ref=producthunt

## React.memo and PureComponent

- https://reactjs.org/docs/react-api.html#reactmemo
- https://reactjs.org/docs/react-api.html#reactpurecomponent
- https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en
- A functional component will always re-render whenever the parent re-renders
- By using React.memo we can memoize a functional component so that the component will not re-render if the props doesn't change. Is the same as using `shouldComponentUpdate` to avoid unnecessary re-renders.
- React.memo uses shallow comparison
- If you have components that don't receive props, there is no need to memoize them.
- On the initial mount, a memoized component takes a little longer. Optimizations always come with a cost
- `<Person>` component initial mount -> 1.3ms
- React.memo(Person) memoized component initial mount -> 1.5ms 
- Use the Profiler to check components render times
- PureComponent is the same but for class components
- Take care when passing inline object as props to memoized components. This way, our component will re-render because inlined object props will be instantiated on every parent re-render. Remember that React.memo uses shallow comparison
- The same happens with passing inline functions and arrays as props

## useCallback and useMemo

- https://reactjs.org/docs/hooks-reference.html#usecallback
- Memoize functions so that we don't call them and re-render them unnecessarily if we don't have to

- Whe want to use useCallback when we simply want a memoized function and we use useMemo when we want a memoized value. And we only want to memoize value when the function itself is generally going to be very computationally expensive

- https://kentcdodds.com/blog/usememo-and-usecallback

## Gzipping and compression

- https://www.npmjs.com/package/compression

## Profiler

- https://reactjs.org/docs/profiler.html#usage
