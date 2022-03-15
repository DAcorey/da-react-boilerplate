// Imports the required action types, sets an initial state and dispatches an action based
// upon the provided action type, which will then update the state.

// This file can also be used as a simple boilerplate for future reducer files.

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
    // Switch statement for determining which states to handle based upon the action called
    switch (action.type) {
        // Handle Example Action
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