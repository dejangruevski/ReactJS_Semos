import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTodos } from "./../actions/TodoActions";

export const Todos = () => {
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.TodosReducer.todos);

    useEffect(() => {
        dispatch(fetchTodos());
    }, [dispatch]);

    return (
        <div id="todos">
            <h2>Todos</h2>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        {todo.title}
                    </li>
                ))}
            </ul>
        </div>
    );
};
