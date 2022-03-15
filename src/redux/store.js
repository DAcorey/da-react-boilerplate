// Creates a Redux store, applies the Thunk middleware and exports the store to be used by the Provider component.

// Import Dependencies
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';

// Initialize State
const initialState = {};

// Create Middleware
const middleware = [thunk];

// Create store
const store = createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(...middleware),
        // Use redux dev tools if specified. Otherwise return function that returns nothing (this is to prevent a redux error)
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    )
);

// Export store
export default store;