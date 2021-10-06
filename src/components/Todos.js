import React from 'react';
import TodoList from "./TodoList";

const Todos = ({todos,toggleCompletion,removeTodo}) => {
    return (
        <div>

            {todos.map((todo) => (
                <TodoList key={todo.id} todo={todo} toggleCompletion={toggleCompletion} removeTodo={removeTodo} />
            ))}
        </div>
    );
};

export default Todos;
