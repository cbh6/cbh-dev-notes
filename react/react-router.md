# React Router 

## what's the diff between `react-router-dom` & `react-router`?

Extracted from [github.com/ReacTraining](https://github.com/ReactTraining/react-router/issues/4648)

In v4, react-router exports the core components and functions. react-router-dom exports DOM-aware components, like <Link> (which renders an **`<a>`**) and **`<BrowserRouter>`** (which interacts with the browser's window.history ).

react-router-dom re-exports all of react-router's exports, so you only need to import from react-router-dom in your project.