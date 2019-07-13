import thunk from 'redux-thunk';
import {combineReducers, createStore, applyMiddleware, compose} from 'redux';
//types
const FETCH_EMPLOYEES = 'FETCH_EMPLOYEES';
const ADD_EMPLOYEE = 'ADD_EMPLOYEE';
const POST_COMMENT = 'POST_COMMENT';
const NEW_USER_COMMENTS = 'NEW_USER_COMMENTS'
const HEAD_STATUS = 'HEAD_STATUS';
const COMMENT_STATUS = 'COMMENT_STATUS';
const RESET_BUTTON = 'RESET_BUTTON';
const CAROUSEL_POSITION = "CAROUSEL_POSITION"

//actions

const resetButton = () => (
    {
        type:RESET_BUTTON
    }
)

const addNewUserComments = (id) => ({
    type:NEW_USER_COMMENTS,
    payload:id
})

const addEmployee = (newEmpObject) => ({
    type:ADD_EMPLOYEE,
    payload:newEmpObject
})


const changePosition = (data) => (
    {
        type:CAROUSEL_POSITION,
        payload:data
    }
)



const changeHeadStatus = (data) => (
    {
        type:HEAD_STATUS,
        payload:data
    }
)

const changeCommentStatus = (data) => (
    {
        type:COMMENT_STATUS,
        payload:data
    }
)



const fetchEmployees = (data) => dispatch => {
    fetch('http://ozo8l.mocklab.io/users')
    .then(res => res.json())
    .then(res => dispatch({
        type: FETCH_EMPLOYEES,
        payload: res
    }))
}




const postComment = (commentObj) => (
    {
        type: POST_COMMENT,
        payload: commentObj
    }
)


//main reducer
const initialState = {
    users: []
}


const mainReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_EMPLOYEES:
            return {
                ...state,
                users:action.payload

            };
            case ADD_EMPLOYEE:
            return {
                users:state.users.concat(action.payload)

            }
            default: 
            return state;
            
    }
}

//button reducer
const initialButton = {
    headStatus:true,
    commentStatus:false,
}

const buttonReducer = (state=initialButton, action) => {
    switch(action.type) {
        case HEAD_STATUS:
            return {
                ...state,
                headStatus:action.payload

            };
            case COMMENT_STATUS:
            return {
                ...state,
                commentStatus:action.payload

            };
            case RESET_BUTTON:
            return initialButton;
            
            default: 
            return state;
            
    }

}
//carousel position

const carouselReducer = (state={position: 0}, action) => {
    switch(action.type) {
        case CAROUSEL_POSITION:
            return {
                position:action.payload

            };
            default: 
            return state;
            
    }

}





//comments reducer

const initialComments = {
    1:[],
    2:[],
    3:[],
    4:[],
    5:[],
    6:[],
    7:[],
    8:[],
    9:[],
    10:[]

}

const commentsReducer = (state =initialComments, action) => {
    switch(action.type) {
        case POST_COMMENT:
            return {
                ...state,
                [`${action.payload.location}`]: [...state[`${action.payload.location}`], action.payload]


            };
            case NEW_USER_COMMENTS:
            return {
                ...state,
                [`${action.payload}`]: []


            }
            default:
                return state
    }
}



//combine reducers

const rootReducer = combineReducers({
    main: mainReducer,
    commentsForm: commentsReducer,
    buttonStatus:buttonReducer,
    carouselPosition: carouselReducer
})




//create store
const middleware = [thunk];
const store = createStore(rootReducer, {}, compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

))

export {
    store,
    fetchEmployees,
    postComment,
    changeHeadStatus,
    changeCommentStatus,
    changePosition,
    addEmployee,
    addNewUserComments,
    resetButton
}