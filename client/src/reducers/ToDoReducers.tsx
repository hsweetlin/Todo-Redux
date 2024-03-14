

interface Todo {
    id: number;
    text: string;
    completed: boolean;
  }
  
  const initialState: Todo[] = [];

export const TodoReducer = (state=initialState,action: any): Todo[]  => {
switch (action.type){
    case 'ADD_TODO':
        return [...state, {id:state.length, completed:false, text:action.payload.text}];
        case 'DELETE_TODO':
            return state.filter((todo: any)=> todo.id !== action.payload.id );
            case 'TOGGLE_TODO':
                return state.map((todo) =>
        todo.id === action.payload.id ? { ...todo, completed: !todo.completed } : todo
      );
        
        default:
            return state;
        

    }

}