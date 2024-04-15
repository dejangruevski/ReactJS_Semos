import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import CakeReducer from './reducers/CakeReducer';
import CommentsReducer from './reducers/CommentsReducer';
import TodosReducer from './reducers/TodosReducer';

const reducer = {
    CakeReducer: CakeReducer,
    CommentsReducer: CommentsReducer,
    TodosReducer: TodosReducer
}

export default configureStore({
    reducer: reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})