https://appdividend.com/2017/08/23/redux-tutorial-example-scratch/

App.js the component where our other components are included. We are creating the simple counter application. However, we need to define first how many components are required to complete the application.

There are mainly two types of components when you are dealing with React and Redux.

1. Smart Component

2. Dumb Component

## Smart Component
The smart component is the kind of component, which directly interacts with the state of our application. It has access to the store and it can either dispatch the actions or get the current state of our application. It is the smart components because when the store is changed, by default, it subscribes the new state and changes the view according to it. In our application, there are three smart components.

* Counter.js
* AddCounter.js
* RemoveCounter.js

All these smart components are put in the containers folder, which I will create later in this article.

Container components only contain that components that are smart.

## Dumb Component
App.js is the Dumb component, it includes the child component but, it does not interact the store. So we put that component inside components folder.
