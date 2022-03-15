// Imports the required action types, creates an action, or actions, that dispatches an event
// to the reducer and then exports the action to be used by the desired component.

// This file can also be used as a simple boilerplate for future action(s) files.

// Import Action Types
import {
    EXAMPLE_ACTION
} from './types';

// Export example action
export const exampleAction = (param) => dispatch => {
    dispatch({ type: EXAMPLE_ACTION, payload: param });
};