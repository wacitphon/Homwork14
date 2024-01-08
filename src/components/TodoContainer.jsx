import React, { useCallback } from 'react';
import TodoItem from './TodoItem';

const TodoContainer = (props) => {
  const { todos, onDelete, onUpdate } = props;

  return (
    <div className="todo-container">
      {todos.map((el) => (
        <TodoItem
          key={el.id}
          job={el}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      ))}
    </div>
  );
};

export default TodoContainer