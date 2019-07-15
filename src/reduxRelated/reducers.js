import {combineReducers} from 'redux';
import {FETCH_EMPLOYEES, FETCH_ERROR, POST_COMMENT, ADD_EMPLOYEE,  NEW_USER_COMMENTS, HEAD_STATUS, COMMENT_STATUS, RESET_BUTTON, CAROUSEL_POSITION} from './types'

//main reducer
const initialState = {
    users: [],
    error:false
}


const mainReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_EMPLOYEES:
            return {
                users:action.payload,
                error:false

            };
            case ADD_EMPLOYEE:
            return {
                users:state.users.concat(action.payload),
                error:state.error

            };
            case FETCH_ERROR:
            return {
                users:state.users,
                error:true

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
//carousel position reducer

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

export {
    rootReducer
}