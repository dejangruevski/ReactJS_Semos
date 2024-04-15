import { FETCH_TODOS } from './../constants/TodosConstants';

export const fetchTodos = () => {
    return async (dispatch) => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos');
            const data = await response.json();
            dispatch({
                type: FETCH_TODOS,
                payload: data
            });
        } catch (error) {
            console.error('Error fetching todos: ', error);
        }
    };
};
