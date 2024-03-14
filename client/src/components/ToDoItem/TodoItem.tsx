import React from 'react';

interface Todo {
    id: number;
    text: string;
    completed: boolean;
  }

interface TodoItemProps {
    todo: Todo;
    onToggle: () => void;
    onDelete: () => void;
  }

const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle, onDelete }) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={onToggle}
      />
      <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
        {todo.text}
      </span>
      <button onClick={onDelete}>Delete</button>
    </li>
  );
};

export default TodoItem;