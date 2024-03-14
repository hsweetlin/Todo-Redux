import React from 'react';
import { connect } from 'react-redux';
import TodoItem from '../ToDoItem/TodoItem';
import { ToggleTodo,DeleteTodo } from '../../actions/ToDoActions';

interface Todo {
    id: number;
    text: string;
    completed: boolean;
    
  }
  
  interface TodoListProps {
    todo: Todo[];
    ToggleTodo: (id: number) => void;
    DeleteTodo: (id: number) => void;
  }


const TodoList: React.FC<TodoListProps> = ({ todo,ToggleTodo, DeleteTodo }) => {
  return (
    <ul>
      {todo.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={() => ToggleTodo(todo.id)}
          onDelete={() => DeleteTodo(todo.id)}
        />
      ))}
    </ul>
  );
};

const mapStateToProps = (state: { todo: Todo[] }): { todo: Todo[] } => ({
    todo: state.todo,
  });

const mapDispatchToProps = {
  ToggleTodo,
  DeleteTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);