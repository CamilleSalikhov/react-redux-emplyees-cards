import {FETCH_EMPLOYEES, FETCH_ERROR, POST_COMMENT, ADD_EMPLOYEE,  NEW_USER_COMMENTS, HEAD_STATUS, COMMENT_STATUS, RESET_BUTTON, CAROUSEL_POSITION} from './types';
import {response} from '../apiGetResponse'

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


//request to API
const fetchEmployees = (data) => ({
    type: FETCH_EMPLOYEES,
    payload: response
})

/*.catch(err => dispatch(
        {
            type:FETCH_ERROR
        }
    )) */




const postComment = (commentObj) => (
    {
        type: POST_COMMENT,
        payload: commentObj
    }
)

export {
    fetchEmployees,
    postComment,
    changeHeadStatus,
    changeCommentStatus,
    changePosition,
    addEmployee,
    addNewUserComments,
    resetButton
}