# React performance optimizations

Plugin for chrome browser to help with React development

[React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)

To view performance metrics for your react app:

Append `?react_perf` to your local server URL (e.g. `localhost:3000/?react_perf`) and visit that URL in a browser

---

- Connect with redux or manage the state in the top level component will produce re-render children component. In some cases is better to connect to redux or manage state in lower level component to prevent unnecessary re-rendering.
- Thats some kind of architectural decision.
- Stateless components only get re-rendered when some of their props change. We can use PureComponents instead of Components to replicate this behavior on class Components.
- PureComponents have a caveat, they use Shallow Data Comparison to decide if props change. With nested objects or complicated data as props it could produce errors when re-rendering.
- Is better to use ShouldComponentUpdate to manually decide if component needs to render again. But dont abuse of this life cycle hook because we are adding some extra code that needs to be run.

---

## Other resources and tools

Asynchronous nature of setState()

https://medium.com/@wereHamster/beware-react-setstate-is-asynchronous-ce87ef1a9cf3

https://vasanthk.gitbooks.io/react-bits/patterns/19.async-nature-of-setState.html


[Why did you update](https://github.com/maicki/why-did-you-update) is a function that monkey patches React and notifies you in the console when potentially unnecessary re-renders occur.
