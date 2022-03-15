// Combines all of the separate reducers into a single reducer and exports it to be used by the data store.

// Import Dependencies and Reducers
import { combineReducers } from 'redux';
import exampleReducer from './exampleReducer';

// Combine and export reducers
export default combineReducers({
    example: exampleReducer
});