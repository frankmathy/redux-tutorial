import notesReducer from './notesreducer';
import visibilityFilter from './visibilityFilter';
import { combineReducers } from 'redux';

const reducers = combineReducers({
    notes: notesReducer,
    visibility: visibilityFilter
});

export default reducers;
