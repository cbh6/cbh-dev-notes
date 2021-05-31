# JAVASCRIPT

## What is the DOM? 

> Is the HTML you write the DOM? -> No, but the HTML you write is parsed by the browser and turned into the DOM
> Is 'View Source' the DOM? -> View Source just shows you the HTML that makes up that page. Probably the exact HTML that you wrote
> Is the code in DevTools the DOM -> Yes, kinda! When you’re looking at the panel in whatever DevTools you are using that shows you stuff that looks like HTML, that is a visual representation of the DOM

*Definition 1:*

The Document Object Model (DOM) is an application programming interface (API) for valid HTML and well-formed XML documents. It defines the logical structure of documents and the way a document is accessed and manipulated

*Definition 2:*

The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects. That way, programming languages can connect to the page.

A Web page is a document. This document can be either displayed in the browser window or as the HTML source. But it is the same document in both cases. The Document Object Model (DOM) represents that same document so it can be manipulated. The DOM is an object-oriented representation of the web page, which can be modified with a scripting language such as JavaScript.


## What are some of the features of ES6?

https://github.com/lukehoban/es6features

*Arrows*

Arrows are a function shorthand using the => syntax. They are syntactically similar to the related feature in C#, Java 8 and CoffeeScript. They support both statement block bodies as well as expression bodies which return the value of the expression. Unlike functions, arrows share the same lexical this as their surrounding code.

*Classes*

ES6 classes are a simple sugar over the prototype-based OO pattern. Having a single convenient declarative form makes class patterns easier to use, and encourages interoperability. Classes support prototype-based inheritance, super calls, instance and static methods and constructors.

*Template Strings*
*Destructuring*
*Default + Rest + Spread*
*let + const*

... and more

## What it's this in javascript?

https://www.w3schools.com/js/js_this.asp

The JavaScript this keyword refers to the object it belongs to.

It has different values depending on where it is used:

- In a method, this refers to the owner object.
- Alone, this refers to the global object.
- In a function, this refers to the global object.
- In a function, in strict mode, this is undefined.
- In an event, this refers to the element that received the event.
- Methods like call(), and apply() can refer this to any object.

## How does JS work? (Explain Call stack/ js interpreter/ event loop, etc)

### JS Interpreter / Engines

https://dzone.com/articles/how-javascript-engine-works

- JavaScript engines are a program that helps in converting your code of JavaScript into a lower level code or machine code. ECMAScript Standards is being followed by the JavaScript engines. The job of these standards is to give a definition, how JavaScript engines should work. It also tells what all features it should have.
- The work of the JavaScript engine was taking JavaScript source code. Then perform the compilation to binary instructions (machine code) that are easily understandable by CPU.
- A JavaScript engine which is limited consists of a baseline compiler whose work is to do the compilation of the code in the form of intermediate representation (IR), in other words, it is called byte code and then gives the byte code to the interpreter.
- Further, the interpreter takes this byte code, and then make the conversion into machine code. This machine code will further run this code on the hardware of the machine.

https://ivanrobles.pro/javascript-compilado-o-interpretado/

https://blog.makeitreal.camp/lenguajes-compilados-e-interpretados/

https://yosoy.dev/diferencia-entre-lenguajes-compilados-e-interpretados/


### Call Stack

https://www.javascripttutorial.net/javascript-call-stack/

- JavaScript engine uses a call stack to manage execution contexts: the Global Execution Context and Function Execution Contexts.
- The call stack works based on the LIFO principle i.e., last-in-first-out.
- When you execute a script, the JavaScript engine creates a Global Execution Context and pushes it on top of the call stack.
- Whenever a function is called, the JavaScript engine creates a Function Execution Context for the function, pushes it on top of the Call Stack, and starts executing the function.
- If a function calls another function, the JavaScript engine creates a new Function Execution Context for the function that is being called and pushes it on top of the call stack.
- When the current function completes, the JavaScript engine pops it off the call stack and resumes the execution where it left off in the last code listing.
- The script will stop when the call stack is empty.

https://www.javascripttutorial.net/javascript-execution-context/


### Event loop

https://www.javascripttutorial.net/javascript-event-loop/

- JavaScript is a single-threaded programming language. In other words, it can do only one thing at a time.
- JavaScript engine executes a script from the top and works its way down creating execution contexts and pushing and popping functions onto and off the call stack.
- If you have a function that takes a long time to execute, then you cannot do anything on the web browser during the function’s execution. The webpage just hangs.
- A function that takes a long time to execute is known as a blocking function. Technically, the blocking functions block all the interactions with the webpage such as mouse click.
- Some examples of blocking functions are the functions that download files from a remote server or functions that call an API from an external server.
- The event loop is a constantly running process that monitors both the callback queue and the call stack.
- If the call stack is not empty, the event loop waits until it is empty and places the next function from the callback queue to the call stack. If the callback queue is empty, nothing will happen:


---
- (If not explaind) What it's the even loop?
- (If not explaind) What is JavaScript Hoisting?
- What is a Promise?
- How does inharance works in JS?
- Difference between use the property async and defer? -
REACT 
- What is JSX?
- How does the browser reads JSX?
- How do you pass props from parent component to child component?
- How do you manage state in React? Explain more if Redux is mention
- How works lifecycle in React(classic)? - Meh
- How do you call an API? 
- What is the virtual DOM? 
- Explain useMemo hook, when would you use it?
- Explain useEffect hook
- What is useRef and when would you use it?
CSS:
- How can you center an element in css?
- What is CSS specificity?
- What is Flex?
- What is Grid?
- Explain the difference and when would you use one or the other
TESTING:
- What testing library have you use? It was a good option? Why? 
- How would you access a node? 
- How would you test a simple component? (button)
- How would you test a feature? (Example: Simple form 3 inputs, 1 button)
- How would you test a big application?
