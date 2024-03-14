interface AddTodoAction {
    type: string;
    payload: {
      text: string;
    };
  }
  
  interface ToggleTodoAction {
    type: string;
    payload: {
      id: number;
    };
  }
  
  interface DeleteTodoAction {
    type: string;
    payload: {
      id: number;
    };
  }

export const AddTodo = (text: string): AddTodoAction=> ({
    type: 'ADD_TODO',
    payload:{
        text
    }
})
export const ToggleTodo = (id: number): ToggleTodoAction => ({
    type:'TOGGLE_TODO',
    payload:{id}
})

export const DeleteTodo = (id: number): DeleteTodoAction => ({
    type:'DELETE_TODO',
    payload:{id}
})