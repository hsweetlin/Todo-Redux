import React from "react";
import { ToDo } from "./components/ToDo/ToDo";
import TodoForm from "./components/TodoForm/TodoForm";
import TodoList from "./components/ToDoList/TodoList";


export function App() {
    return(
        <>
        <ToDo/>
        <TodoForm />
        <TodoList/>
        </>
    )
}