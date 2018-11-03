# SSR and SPA

## SSR

- The server processes your request and serves a fully rendered html page
- The client reads that html

## SPA

- 1 html file
- the rest is done inside the js proramatically
- you dont have to go to the server for each page
- navigation occurs inside the jsa

*this is like Client side rendering*

- more js on the client at first time
- slower to load at the first
- SEO performance. harder SEO for SPA than SSR

## CSR (client side rendering) VS SSR (server side rendering)

### CSR

- once the page gets rendered and interactive
- the browser doesnt have to make more requests
- using js ajax you get more data

### SSR 

- server request
- meanwhile client shows loader
- server gives us html so we can display something
- JS gets downloaded and evaluated to make it interactive but we can see something really quick

> The interactivity in both cases came at the same time but with ssr, it seems to load content faster because it displays something before with csr


## SSR in react

**next.js**

- full apps interactive. what you can do as a csr you can do as ssr with next
- gatsby is better for static sites like blogs, portfolios, documentation ...

spa -> rendering content in the clientside using js

- when you inspect browser code:
  - in spa (with CRA f ex) - you see `<div id="root">`
  - in ssr (next.js) - you see the html rendered


### SSR with next

- If you use `<a href="/about">` to link to another page
- When you click on it, the whole content is going to be downloaded

- If instead, you use built in <Link element from NExt, when you click on it, only the about content is going to be downloaded. And for further navigation through this page, the server is not going to be requested.
- It's like CSR  