import React, { useState } from 'react';
import { connect } from 'react-redux';
import { AddTodo } from '../../actions/ToDoActions';

const AddTodoForm = ({ AddTodo }) => {
  const [newTodoText, setNewTodoText] = useState('');

  const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setNewTodoText(e.target.value);
  };

  const handleFormSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (newTodoText.trim() !== '') {
      AddTodo(newTodoText);
      setNewTodoText('');
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        placeholder="Add a new todo..."
        value={newTodoText}
        onChange={handleInputChange}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

const mapDispatchToProps = {
  AddTodo,
};

export default connect(null, mapDispatchToProps)(AddTodoForm);