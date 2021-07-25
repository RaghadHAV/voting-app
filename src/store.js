import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import notificationReducer from './reducers/notificationReducer'
import anecdoteReducer from './reducers/anecdoteReducer'
import filteredNotes from './reducers/filterReducer'

const reducer = combineReducers({
    anecdot: anecdoteReducer,
    notofication: notificationReducer,
    filteredNotes: filteredNotes
})
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))


export default store