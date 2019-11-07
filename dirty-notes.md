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

1 - `[class.my-class]="step=='step1'"`
2 - `[ngClass]="{'my-class': step=='step1'}"`
3 - `[ngClass]="{'my-class': step=='step1', 'my-class2':step=='step2' }"`
4 - `[ngClass]="{1:'my-class1',2:'my-class2',3:'my-class4'}[step]"`
5 - `[ngClass]="(step=='step1')?'my-class1':'my-class2'"`
