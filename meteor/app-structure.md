# Meteor app structure notes

## File structure (from meteor docs)

[Guide](https://guide.meteor.com/structure.html)

To fully use the module system and ensure that our code only runs when we ask it to, we recommend that all of your application code should be placed inside the imports/ directory. This means that the Meteor build system will only bundle and include that file if it is referenced from another file using an import (also called “lazy evaluation or loading”).

Meteor will load all files outside of any directory named imports/ in the application using the default file load order rules (also called “eager evaluation or loading”). It is recommended that you create exactly two eagerly loaded files, client/main.js and server/main.js, in order to define explicit entry points for both the client and the server. Meteor ensures that any file in any directory named server/ will only be available on the server, and likewise for files in any directory named client/. This also precludes trying to import a file to be used on the server from any directory named client/ even if it is nested in an imports/ directory and vice versa for importing client files from server/.

These main.js files won’t do anything themselves, but they should import some startup modules which will run immediately, on client and server respectively, when the app loads. These modules should do any configuration necessary for the packages you are using in your app, and import the rest of your app’s code.

### Annotations

#### /private

All files inside a top-level directory called private/ are only accessible from server code and can be loaded via the Assets API. This can be used for private data files and any files that are in your project directory that you don’t want to be accessible from the outside.

#### /imports

Unlike the /client and /server directories where all code is loaded automatically following a specific load order, any code within the project's /imports directory is not loaded automatically. This means that anything placed in this directory must be loaded explicitly in the application. Otherwise, our application won't see it.

Inside of the /imports directory, the guide recommends that we use the following directories:

* /imports/startup
* /imports/api
* /imports/ui

#### imports/startup

Starting with /imports/startup, this directory is intended to contain any code that's intended to run on either client startup or server startup. This suggests that we keep two directories within /imports/startup at /imports/startup/client and /imports/startup/server respectively. Inside of each of those directories, we include an index.js file which imports all of the stuff we need on either client or server startup.

The good news: the same applies for whatever we place in /imports/startup/client. We keep an index.js file in that directory designed to import whatever files we want to load on client-side startup. Instead of loading our file in /server/main.js, though, we rely on /client/main.js.

**Note!**

\*\*
in imports/api there are domains distributed by folder. Each domain folder has its main file (p.e imports/api/users/user.js)
and a server folder (imports/api/users/server). In the server folder there are methods.js and publications.js. These files are loaded in /imports/startup/server/register-api.js and register-api.js is loaded in imports/startup/server/index.js

Finally /imports/startup/server is loaded in /server/main.js

**Conclusion**

* Each domain (methods.js and publications.js) are loaded in startup
* Methods are stored in Meteor.methods({}) and publications are loaded by Meteor.publish() call. We can invoke these methods with Meteor.call() and subscribe to publications with Meteor.subscribe() whenever necessary

(( As described here https://themeteorchef.com/tutorials/understanding-the-imports-directory#tmc-imports-api, we could import methods directly with a named export and when we need to invoke a method, just import it. This prevents loading everything globally. ))

(( With publications there are no deal ))

(( Domains are imported directly in /components/pages ))

#### /imports/api

Next up is /imports/api. This directory is intended to store all code related to data in our application. This includes things like collection definitions, publications, and methods. Inside of /api, it's recommended that we create one folder per "domain." A domain refers to a subset of data in our application.

For example, an issue tracking application may have a "projects" domain and an "issues" domain, where issues belong to projects. This would suggest a structure like /api/projects and /api/issues. Inside of each domain folder, we include all of the files related to the data for that domain.

#### /imports/ui

The name here is a bit more predictable. /imports/ui is used to store all of the user interface related code for our application. Inside, it's suggested that our interface code be broken into three directories: /imports/ui/components, /imports/ui/layouts, and imports/ui/pages. These deserve a bit of explanation.

##### /layouts

Starting with /layouts, this directory is designed to include global page layouts for your application. A layout is the markup used to render the views in your application. Generally speaking, this would include the application header and any "always visible" elements with a specific area for rendering the current template.

##### /pages

The /pages directory is best thought of containing the "pages" in our application. Think of it this way: say we have a signup page that lives at http://localhost:3000/signup in our application. When we visit this route, we'd render a signup page template which is made up of components within the appropriate layout for that route.

##### /components

Finally, the /components directory is intended to hold all of the miscellaneous UI components in your application. For example, a button, a list of issues (borrowing from our issue tracker example above), or a navigation bar. Thinking backwards, components are the lowest level which are contained by pages, which are contained by layouts. Let's borrow our example from above around our <Issue /> component. We're going to create a new page component called <ViewIssue /> which makes use of that component along with one other.
