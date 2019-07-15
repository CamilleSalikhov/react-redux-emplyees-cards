import thunk from 'redux-thunk';
import {createStore, applyMiddleware, compose} from 'redux';
import {rootReducer} from './reducers'

//create store
const middleware = [thunk];
const store = createStore(rootReducer, {}, compose(
    applyMiddleware(...middleware)
))

export {
    store
}