import { FETCH_COMMENTS_SUCCESS, FETCH_COMMENTS_FAIL, DELETE_COMMENTS_SUCCESS, DELETE_COMMENTS_FAIL } from './../constants/CommentsConstants';
import axios from 'axios';

export const fetchCommentsSuccess = (comments) => {//comments -> array(500)
    return {
        type: FETCH_COMMENTS_SUCCESS,
        payload: comments
    }
}

export const fetchCommentsFail = () => {
    return {
        type: FETCH_COMMENTS_FAIL,
        payload: error
    }
}

export const fetchCommentsRequest = () => {
    return dispatch => {
        axios.get('https://jsonplaceholder.typicode.com/comments') //povik do url za comments
            .then(result => dispatch(fetchCommentsSuccess(result.data))) //ako e uspesen povikot pravime dispatch na akcij za comments
            .catch(error => dispatch(fetchCommentsFail(error.message))) //ako e neuspesen povikot pravime dispatch na akcij za faul
    }
}


export const deleteCommentsSuccess = (id) => {
    return {
        type: DELETE_COMMENTS_SUCCESS,
        payload: id
    }
}

export const deleteCommentsFail = (error) => {
    return {
        type: DELETE_COMMENTS_FAIL,
        payload: error
    }
}

export const deleteCommentsRequest = (id) => {
    return dispatch => {
        axios.delete('https://jsonplaceholder.typicode.com/comments/' + id) 
            .then(result => dispatch(deleteCommentsSuccess(id))) 
            .catch(error => dispatch(deleteCommentsFail(error.message))) 
    }
}