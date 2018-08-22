# Code Splitting

**Idea** : How can we ship the least amount of javascript to the user

There is more info about this concept in [React documentation](https://reactjs.org/docs/code-splitting.html)

The javascript bundle is downloaded when the user gets into the page. We can remove some javascript of that bundle by doing code splitting. This will allow us to ship javascript files when the user access some route or a component needs to appear.


There are two types of code splitting:

- Route based chunking: Split up the javascript files based on the routes
- Component based chunking: Split up the javascript files on a component level. 

For example: If HomePage gets really big, maybe you don't need to load up all javascript. If there is a SideBar component that appears when clicking a button, we could load the small js file of that component when clicking that button.
