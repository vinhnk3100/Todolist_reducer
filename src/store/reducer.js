import {
  SET_TODO,
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  ADD_COMPLETE_TODO,
  DELETE_COMPLETE_TODO,
} from './constant';

const initialState = {
  todos: [],
  todoInput: '',
  completeTodos: [],
  currentTodo: '',
};

export default function reducer(state, action) {
  switch (action.type) {
    case SET_TODO:
      return {
        ...state,
        todoInput: action.payload,
      };
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case DELETE_TODO:
      const newTodos = [...state.todos];
      newTodos.splice(action.payload, 1);
      return {
        ...state,
        todos: newTodos,
      };
    case EDIT_TODO:
      const newEditTodolist = [...state.todos];
      const { todoValue, todoId } = action.payload;
      let currentTodoValue = newEditTodolist[todoId];
      currentTodoValue = todoValue;
      console.log(currentTodoValue);
      return {
        ...state,
        currentTodo: currentTodoValue,
      };
    case ADD_COMPLETE_TODO:
      const todoList = [...state.todos];

      // Adding complete todo to Complete list
      const newCompleteTodo = todoList[action.payload];

      // Remove todo from todo list
      todoList.splice(action.payload, 1);

      return {
        ...state,
        completeTodos: [...state.completeTodos, newCompleteTodo],
        todos: todoList,
      };
    case DELETE_COMPLETE_TODO:
      const completeTodoList = [...state.completeTodos];
      completeTodoList.splice(action.payload, 1);
      return {
        ...state,
        completeTodos: completeTodoList,
      };
    default:
      throw new Error();
  }
}

export { initialState };
