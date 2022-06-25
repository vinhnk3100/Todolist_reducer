import {
  SET_TODO,
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  ADD_COMPLETE_TODO,
  DELETE_COMPLETE_TODO,
} from './constant';

export const setTodoInput = payload => ({
  type: SET_TODO,
  payload,
});

export const addTodo = payload => ({
  type: ADD_TODO,
  payload,
});

export const deleteTodo = payload => ({
  type: DELETE_TODO,
  payload,
});

export const editTodo = payload => ({
  type: EDIT_TODO,
  payload,
});

export const addCompleteTodo = payload => ({
  type: ADD_COMPLETE_TODO,
  payload,
});

export const deleteCompleteTodo = payload => ({
  type: DELETE_COMPLETE_TODO,
  payload,
});
