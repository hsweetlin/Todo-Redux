import { combineReducers } from "redux";
import { TodoReducer } from "./ToDoReducers";

export interface Todo {
    id: number;
    text: string;
    completed: boolean;
  }
  export interface RootState {
    todo: Todo[];
    // Add other state slices as needed
  }

export const rootReducer = combineReducers<RootState>({
    todo: TodoReducer
});