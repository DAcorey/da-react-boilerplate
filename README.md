# Dragon Army React App Boilerplate

A boilerplate for internal Dragon Army use. The point of this boilerplate is to be able to quickly spin up a React application with all the necessary tools already set up, documented and ready for use.


## About This Boilerplate

Below is the [technologies used](#technologies-used) and details about the [folder structure](#folder-structure).


### Technologies Used

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). You may find more about Create React App from the previous link, or in the [Create React App Standard Docs](#create-react-app-standard-docs) section.

The project uses [Redux](https://redux.js.org/) to set up global state management. You can find out more about how we use Redux in the previous link, or you can find out how we use it in the [Using Redux](#using-redux) section.

* Since we are using Redux in a React environment, it is only natural that we use not just Redux, but [React Redux](https://react-redux.js.org/) for mapping the Redux state to the component props.

* Along with Redux, we are also using the [redux-thunk](https://github.com/reduxjs/redux-thunk) middleware. [Why do we need this?](https://github.com/reduxjs/redux-thunk#why-do-i-need-this) Tl;dr This is for handling Redux asynchronous side effects and will hopefully help the growing concerns of a folder structure that is too complex.

The project also uses [React Router](https://reactrouter.com/) to handle declarative routing. You can find out more about how to use React Router in the previous link, or you can check the [Using React Router](#using-react-router) section.


### Folder structure

The main folder structure mimics [Create React App Folder Structure](https://create-react-app.dev/docs/folder-structure/):

```
da-react-boilerplate/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    App.css
    App.js
    App.test.js
    index.css
    index.js
    logo.svg
```

We begin to differentiate our structure and get more granular in the `/src` directory.

First, each React component will have it's own folder. **The folder name should be capitalized and should be the same as the component name.** Inside the component folder will be the component file, the component styles file and any other files related to the component, such as a Redux component or a Test component. **All files in the component folder should also be capitalized and be the same as the component name.**

*To avoid name conflicts, all Redux files should have `.redux` appended to the file name and all test files should have `.test` appended to the file name. Like so:*

```
App/
    App.css
    App.js
    App.redux.js
    App.test.js
```

Although no other components exist in this boilerplate, the convention that we are trying to adhere to is that the `/src` directory will contain a `/Components` folder and a `/Pages` folder, at the least.

* The `/Components` folder will contain reusable components that are used throughout the application, such as an `Input` component.

* The `/Pages` folder will contain React parent components that are used to be page containers.

There may also exist an `/assets` folder and/or an `/utils` folder. The(se) folder(s) can be used for holding images, utility code or any random piece of code that doesn't seem to have a proper home.

So the overall file structure should look somewhat similar to this:

```
da-react-boilerplate/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    assets/
        images/
            logo.svg
        js/
            utilityCode.js
    Components/
        Input/
            Input.js
            Input.css
    Pages/
        App/
            App.css
            App.js
            App.redux.js
            App.test.js
    redux/
    index.css
    index.js
```

**Note:** This boilerplate does contain a `/redux` folder. This folder can be left in the `/src` folder, or it can be moved to the `/assets` or `/utils` folder. *Moving the `/redux` folder WON'T cause any issue with the code inside the `/redux` folder. However, you will have to change the relative path in the component(s) that are importing the Redux actions, `App.redux.js` in this case. For more information on the `/redux` folder, check out the [Redux Overview](#overview) section.*


## Running Locally

Below are [prerequisites](#prerequisites) and [how to start](#starting).


### Prerequisites

Must have Node.js installed to run. If you need to install Node.js, please refer to their website [here](https://nodejs.org/en/).


### Starting

1. Clone the boilerplate:

    ```
    git clone <INSERT GITHUB LINK HERE>
    ```

2. Move to the application's root directory:

    ```
    cd da-react-boilerplate
    ```

3. Once inside of the application's root directory, install the dependencies. To do so, run:

    ```
    npm install
    ```

    or

    ```
    yarn install
    ```

4. After the dependencies are installed, it's time to start the application. First, double check that you're still in the `da-react-boilerplate` root directory, then run this command:

    ```
    npm start
    ```

    or

    ```
    yarn start
    ```

The application opens up a standard looking [create-react-app](https://github.com/facebook/create-react-app#creating-an-app) landing page. The only changes are an extra line which should read "Hello World! From Redux!". *This line shows that Redux is properly set up and working.*

Below that should be a simple tab container that the user can select between. *This component shows that React Router is properly set up and working.*

Example:

![landing_page](https://user-images.githubusercontent.com/37916145/158306638-3b97f93e-c966-4f86-ae52-8e8cb6c4d2b2.png)

If this line is not displayed, then you may check the console for logs from the reducer. These logs will demonstrate that the action is reaching the reducer.

![landing_page_console](https://user-images.githubusercontent.com/37916145/158096997-5f541ee4-fcd5-4128-84fc-9f7332756766.png)


## Using Redux

Below is an [overview](#redux-overview), a [how-to](#how-to-use) and [removal steps](#removing-redux-from-boilerplate).


### Overview

**Useful Docs:**

* [Redux docs](https://redux.js.org/introduction/getting-started)
    * [Getting Started with React Redux](https://react-redux.js.org/introduction/getting-started)
    * [Writing Logic with Thunks](https://redux.js.org/usage/writing-logic-thunks)
* [redux-thunk repo](https://github.com/reduxjs/redux-thunk)
* [react-redux repo](https://github.com/reduxjs/react-redux)

The project contains a `/redux` directory, inside the `/src` directory, which contains all of the [Redux](https://redux.js.org/) code.

Inside this folder is a `store.js` file and two directories, `/actions` and `/reducers`.

* The `store.js` file creates a data store, applies the [redux-thunk](https://github.com/reduxjs/redux-thunk) middleware and exports the data store to be used by the Provider component. *Baring any deprecation or major changes, you should never have to edit this file.*

Inside the `/actions` directory will be two files, `types.js` and `exampleActions.js`.

* The `types.js` file will be where all of the action types are defined and exported. You will find a single export inside, the `EXAMPLE_ACTION`. *You can either put ALL action types in this file, or make a directory for every action set to have it's own `type.js` folder.*

* The `exampleActions.js` file can be used as a boilerplate for any other action(s) file that needs to be made. This file imports the example action type, creates an action that dispatches an event to the example reducer and exports it to be used by the desired component.

This brings us to the `/reducers` directory. Inside this directory is also two files, `index.js` and `exampleReducer.js`.

* The `index.js` file is used for importing all of the separate reducers and combining them into a single reducer for the data store. *This connection is already made, so this file will only be used for importing and adding a new reducer to the `combineReducers` method.*

* The `exampleReducer.js` file, much like the `exampleAction.js` file, can be used as a boilerplate for any other reducers that need to be made. This file imports the example action type, sets an initial state and dispatches an action based upon the provided action type, which will then update the state.

With all of this set up, the component that desires to use either the exported action(s), and/or the created state, can simply import the action and map the Redux state to the component's props.

An example of how to create and use a new action, reducer and state can be found below in the [How to Use](#how-to-use) section.

The basic data flow for Redux will look like so:

![Basic Redux Flow](https://user-images.githubusercontent.com/37916145/158308939-bcedf2df-5650-4a8d-91f2-df1a25c8d54a.png)


### How to Use

Redux is mostly a lot of boilerplate work, so here we break down how to use the existing layout.

Please make sure to first see the above [Redux Overview](#redux-overview) section, as it breaks down what each file is used for. *The data flow chart will be especially helpful.*

1. You will need to create and export an action type in the `type.js` file, located in `/src/redux/actions`. *To adhere to modern standards, make sure that your action type is fully capitalized with underscores, `_`, instead of spaces.* Example:

    ```
    export const EXAMPLE_ACTION = "EXAMPLE_ACTION";
    ```

2. Once your action type is created, you may create a new actions file in the `/src/redux/actions` folder, or you may update an existing actions file.

    * Inside of your actions file you will need to import your newly created action type. Then you will need to create and export an action which dispatches an event to the reducer, like so (examples for both with and without a payload):

    ```
    // Import Action Types
    import {
        EXAMPLE_ACTION
    } from './types';

    // Export Action without a payload
    export const exampleActionNoPayload = () => dispatch => {
        dispatch({ type: EXAMPLE_ACTION });
    };

    // Export Action with a payload
    export const exampleActionWithPayload = (param) => dispatch => {
        dispatch({ type: EXAMPLE_ACTION, payload: param });
    };
    ```

3. Now that you have an action that is exported to be used by a component, we will need to make a reducer to handle that action BEFORE we import it into any component(s). You may now create a new reducer file in the `/src/redux/reducers` folder, or you may update an existing reducer file.

    * Inside of your reducer file, you will likewise need to import your newly created action type. From here, the process is slightly different depending on if you are creating a new reducer or editing an existing reducer.

    * If you are creating a new reducer, then you will need to create an `initialState` JS object. Inside the `initialState` object, you will create any piece(s) of state that will need to be used by the component(s). Finally, you'll need to make and export a reducer function. This function will take in `state` and `action` parameters (with the `state` parameter defaulting to the `initialState` object). Inside this function, there is a conditional statement which will switch based upon different action types. Here the reducer will handle different action types and update the state based upon the supplied action types, like so:

    ```
    // Import action types
    import {
        EXAMPLE_ACTION
    } from '../actions/types';

    // Set Initial State
    const initialState = {
        exampleState: ''
    };

    // Create, Handle and Export State Reducer
    export default function exampleReducer (state = initialState, action) {
        // Switch statement for determining which states to handle based upon the action type called
        switch (action.type) {
            // Handle Example Action (can handle both with and without parameters the same)
            case EXAMPLE_ACTION:
                console.log('Example reducer hit!');
                console.log('Action payload: ' + action.payload);
                return {
                    ...state,
                    exampleState: action.payload
                };
            
            // Return state by default
            default:
                return state;
        };
    };
    ```

    * If you are editing an existing reducer, then you will only need to import your action type, create any desired state and add a case to the switch block to handle your new action.

4. If you updated an existing reducer, then you can skip this step. If, however, you created a new reducer, then you need to add your new reducer to the `combineReducers` method in the `index.js` file, located in the `/src/redux/reducers` directory. In this file, you only need to import your new reducer and add it to the method, like so:

    ```
    // Import Dependencies and Reducers
    import { combineReducers } from 'redux';
    import exampleReducer from './exampleReducer'; // Import your new reducer

    // Combine and export reducers
    export default combineReducers({
        example: exampleReducer // Add your reducer to the 'combineReducers' method
    });
    ```

    **Note:** The name that you provide the `combineReducers` method is the name that you will use to access the state in your reducer when mapping the state to the component's props.

5. Now that you have your action and reducer all set up and ready to go, it's time to add the action and the state to your component.

    * To do so, you will first need to import the `PropTypes` dependency from the `prop-types` package. As well as the `connect` HOC from the `react-redux` package and the action that you just created, like so:

    ```
    import PropTypes from 'prop-types';
    import { connect } from 'react-redux';
    import { exampleAction } from '../redux/actions/exampleActions'; // Import your created action
    ```

    * Once your dependencies are imported, you will then need to create propTypes for your component. To do this, we'll first import a component then add a `propTypes` object to that component and add the PropTypes for each desired state, and action, to be used by that component, like so:

    ```
    // Import Component
    import TestPage from './TestPage';

    // Create PropTypes
    TestPage.propTypes = {
        exampleAction: PropTypes.func.isRequired, // Add propType for the created action
        exampleState: PropTypes.string.isRequired // Add propType for the created state
    };
    ```

    * Now that you have the propTypes set up, it's time to map the Redux state to the component's props, like so:

    ```
    // Maps States to Component Props
    const mapStateToProps = state => ({
        exampleState: state.example.exampleState
    });
    ```

    **Note:** The `state` object will contain objects of each created reducer's state. This is where you will use the name provided to the `combineReducers` method, as previously mentioned. *In this example, the name of the reducer is `example` so our `exampleState` property comes from `state.example.exampleState`.*

    * Finally, you may use the `connect` HOC to export the component with the injected props. Like so:

    ```
    // Export component w/ Redux
    export default connect(mapStateToProps, { exampleAction })(TestPage);
    ```

    * Your final code should look similar to this:

    ```
    // Import dependencies
    import PropTypes from 'prop-types';
    import { connect } from 'react-redux';
    import { exampleAction } from '../redux/actions/exampleActions';

    // Import Component
    import TestPage from './TestPage';

    // Create PropTypes
    TestPage.propTypes = {
        exampleAction: PropTypes.func.isRequired,
        exampleState: PropTypes.string.isRequired
    };

    // Maps States to Component Props
    const mapStateToProps = state => ({
        exampleState: state.example.exampleState
    });

    // Export component w/ Redux
    export default connect(mapStateToProps, { exampleAction })(TestPage);
    ```

    **Important Note:** In the above example, we are importing the component then injecting the props and exporting the component again as a new component. This means that in order to use this component with the intended props, anywhere that you import the component, you will have to import the new component with the redux code and NOT the original component. To differentiate the two, be sure to append `.redux` to the new component's name. *See the [Folder Structure](#folder-structure) section for more details.* You could, however, add all of the code from step 5 directly into the component file itself. Just keep in mind that as the project grows, this may add a lot of extra code to sift through when trying to debug.

6. Now that the state and action exist, and your component has access to them, how do you actually use them in the component? Easy, both the state and the action are now injected into the component's props. So using them is as easy as `this.props.exampleState` or `this.props.exampleAction()`!


### Removing Redux from Boilerplate

If you don't want to use Redux in your application, then you can simply follow these steps to fully remove it.

1. Delete the `/redux` folder and all of its content.

2. Remove any component file(s) with `.redux` appended to the name.

3. Change any component import to import the original component rather than the Redux component.

* In this case, there is only one component, the `App.js` component. So go to the `index.js` file in the `/src` folder and change the import statement to:

```
import App from './App/App.js'; // Use your own relative path
```

4. Remove the `Provider` component from the `index.js` file.

* Don't forget to also remove the import for the component as well as the import for the `store.js` file which should no longer exist.

5. You will also have to remove the `useEffect()` method and the following line from the `App.js` component:

```
<p>{ props.exampleState }</p>
```

*Basically remove any code related to Redux from all components.*

6. Finally, remove redux, react-redux and redux-thunk from the dependencies:

```
npm uninstall redux react-redux redux-thunk
```

or

```
yarn remove redux react-redux redux-thunk
```
    

## Using React Router

**Useful Docs:**
[React Router Docs](https://reactrouter.com/docs/en/v6)
* [React Router v6 Overview](https://reactrouter.com/docs/en/v6/getting-started/overview)
* [React Router v6 Tutorial](https://reactrouter.com/docs/en/v6/getting-started/tutorial)
* [React Router v6 API Reference](https://reactrouter.com/docs/en/v6/api)
* [React Router v6 Main Concepts](https://reactrouter.com/docs/en/v6/getting-started/concepts)

Below is an [overview of React Router v6](#react-router-v6-overview) and a section for [removing React Router v6](#removing-react-router).

### React Router v6 Overview

**This boilerplate uses the latest React Router version, v6** For those who are familiar with earlier versions of React Router, here's a run down of the latest and greatest from React Router.

**First off, check out the above [React Router v6 Overview](https://reactrouter.com/docs/en/v6/getting-started/overview).** *Everything here is simply a reiteration of key points in that document.*

The main changes to be aware of for users of the previous versions is that the `Switch` component has been changed to `Routes`. So now, your `Route` components will be wrapped in a `Routes` component, like so:

```
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

render(
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<App />} />
        <Route index element={<Home />} />
        <Route path="teams" element={<Teams />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
```

The other change, that you may have already noticed, is that the `component` attribute of the `Route` component has been changed to `element`.

**Be sure to keep these name changes in mind when moving forward.**

#### Configuring Routes

In previous versions of React Router you had to order your routes a certain way to get the right one to render when multiple routes matched an ambiguous URL. V6 is a lot smarter and will pick the most specific match so you don't have to worry about that anymore. For example, the URL `/teams/new` matches both of these route:

```
<Route path="teams/:teamId" element={<Team />} />
<Route path="teams/new" element={<NewTeamForm />} />
```

But `teams/new` is a more specific match than `/teams/:teamId`, so `<NewTeamForm />` will render.

#### Navigation

Use `Link` to let the user change the URL:

```
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="about">About</Link>
      </nav>
    </div>
  );
}
```

Or `useNavigate` to do it yourself (like after form submissions):

```
import { useNavigate } from "react-router-dom";

function Invoices() {
  let navigate = useNavigate();
  return (
    <div>
      <NewInvoiceForm
        onSubmit={async (event) => {
          let newInvoice = await createInvoice(
            event.target
          );
          navigate(`/invoices/${newInvoice.id}`);
        }}
      />
    </div>
  );
}
```

#### Reading URL Parameters

Use `:style` syntax in your route path and `useParams()` to read them:

```
import { Routes, Route, useParams } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route
        path="invoices/:invoiceId"
        element={<Invoice />}
      />
    </Routes>
  );
}

function Invoice() {
  let params = useParams();
  return <h1>Invoice {params.invoiceId}</h1>;
}
```

**Note:** that the path segment `:invoiceId` and the param's key `params.invoiceId` match up.

A very common use-case is fetching data when the component renders:

```
function Invoice() {
  let { invoiceId } = useParams();
  let invoice = useFakeFetch(`/api/invoices/${invoiceId}`);
  return invoice ? (
    <div>
      <h1>{invoice.customerName}</h1>
    </div>
  ) : (
    <Loading />
  );
}
```

#### Nested Routes

This is one of the most powerful features of React Router making it so you don't have to mess around with complicated layout code. The vast majority of your layouts are coupled to segments of the URL and React Router embraces this fully.

Routes can be nested inside one another, and their paths will nest too (child inheriting the parent).

```
function App() {
  return (
    <Routes>
      <Route path="invoices" element={<Invoices />}>
        <Route path=":invoiceId" element={<Invoice />} />
        <Route path="sent" element={<SentInvoices />} />
      </Route>
    </Routes>
  );
}
```

This route config defined three route paths:

* `"/invoices"`
*  `"/invoices/sent"`
* `"/invoices/:invoiceId"`

When the URL is `"/invoices/sent"` the component tree will be:

```
<App>
  <Invoices>
    <SentInvoices />
  </Invoices>
</App>
```

When the URL is `"/invoices/123"`, the component tree will be:

```
<App>
  <Invoices>
    <Invoice />
  </Invoices>
</App>
```

Notice the inner component that changed with the URL (`<SentInvoices>` and `<Invoice>`). The parent route (`<Invoices>`) is responsible for making sure the matching child route is rendered with `<Outlet>`. Here's the full example:

```
import { Routes, Route, Outlet } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="invoices" element={<Invoices />}>
        <Route path=":invoiceId" element={<Invoice />} />
        <Route path="sent" element={<SentInvoices />} />
      </Route>
    </Routes>
  );
}

function Invoices() {
  return (
    <div>
      <h1>Invoices</h1>
      <Outlet />
    </div>
  );
}

function Invoice() {
  let { invoiceId } = useParams();
  return <h1>Invoice {invoiceId}</h1>;
}

function SentInvoices() {
  return <h1>Sent Invoices</h1>;
}
```

The nested url segments map to nested component trees. This is perfect for creating UI that has persistent navigation in layouts with an inner section that changes with the URL. If you look around the web you'll notice many websites (and especially web apps) have multiple levels of layout nesting.

### Removing React Router

If you don't want React Router in your application, then you can simply follow these steps to remove it.

1. Remove the `BrowserRouter` component from the `index.js` file.

* Don't forget to remove the component import as well.

2. After removing the `BrowserRouter`, the only other code to remove is the router example in the `App.js` file. Remove the below code:

```
// For react router example
import { Routes, Route, Link, Outlet } from 'react-router-dom';

{/* Display React Router example w/ Nested Routes */}
<Routes>
    <Route path="/" element={ <div className="tab">
    <Link className="tablinks" to="tab-one">Tab One</Link>
    <Link className="tablinks" to="tab-two">Tab Two</Link>
    <Link className="tablinks" to="tab-three">Tab Three</Link>
    <Outlet /> { /* This component MUST be in the parent Route component. It tells the parent component where to render the children components */ }
    </div>}>
    <Route index element={<span className='tabcontent'>Click a tab!</span>} /> { /* 'index' routes are for default views */ }
    <Route path="tab-one" element={ <span className='tabcontent'>This is tab one!</span> } />
    <Route path="tab-two" element={ <span className='tabcontent'>This is tab two!</span> } />
    <Route path="tab-three" element={ <span className='tabcontent'>This is tab three!</span> } />
    </Route>
</Routes>

{/* Super simple router example!!! */}
{/* <Routes>
    <Route exact path="/" element={ <Link to='/test-page'>Render Link 1</Link> } />
    <Route exact path="/test-page" element={ <Link to="/">Render Link 2</Link> } />
</Routes> */}
```

3. Finally, now that all the code is out, just remove the dependencies, like so:

```
npm uninstall react-router-dom
```

or

```
yarn remove react-router-dom
```


# Author(s)

[Dragon Army](https://dragonarmy.com/)
[Corey Mitchell](https://github.com/DAcorey)


# Create React App Standard Docs

Everything from this point forward is the standard README docs that come with all projects bootstrapped with Create React App. They have been left  in this document for future references.

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
