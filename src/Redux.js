import thunk from 'redux-thunk';
import {combineReducers, createStore, applyMiddleware, compose} from 'redux';
//types
const FETCH_EMPLOYEES = 'FETCH_EMPLOYEES';
const REDIRECT = 'REDIRECT'

//actions



const fetchEmployees = (data) => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(res => dispatch({
        type: FETCH_EMPLOYEES,
        payload: res
    }))
}

const redirectTo = (id) => ( 
    {
        type: REDIRECT,
        payload:true,
        to:`/${id}`
    }
)



//reducer
const initialState = {
    users: []
}


const mainReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_EMPLOYEES:
            return {
                ...state,
                users:action.payload

            }
            default: 
            return state;
            
    }
}

const redirectReducer = (state ={}, action) => {
    switch(action.type) {
        case REDIRECT :
            return {
                redirect:true,
                to:action.to
            }
            default:
                return state
    }
}



const rootReducer = combineReducers({
    main: mainReducer,
    ifRedirect: redirectReducer
})




//create store
const middleware = [thunk];
const store = createStore(rootReducer, {}, compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

))

export {store, fetchEmployees, redirectTo}