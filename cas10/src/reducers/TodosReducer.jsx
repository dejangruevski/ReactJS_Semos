import { FETCH_TODOS } from './../constants/TodosConstants';

const initialState = {
    todos: [],
}

const TodosReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_TODOS:
            return {
                ...state,
                todos: action.payload
            };
        default:
            return state;
    }
};

export default TodosReducer;
