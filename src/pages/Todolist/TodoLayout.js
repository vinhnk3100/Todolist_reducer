import React from 'react';
import { useContextHook } from '../../Hooks/UseContext';
import { Todolist, TodoInput } from '../../components/Todolist/index';
import { actions } from '../../store/index';

export default function TodoLayout() {
  const [state, dispatch] = useContextHook();

  const { todos, todoInput, completeTodos } = state;

  const handleInput = todo => {
    dispatch(actions.setTodoInput(todo.target.value));
  };

  const handleAddTodo = () => {
    dispatch(actions.addTodo({ title: state.todoInput }));
    dispatch(actions.setTodoInput(''));
  };

  const handleDeleteTodo = id => {
    dispatch(actions.deleteTodo(id));
  };

  const handleCompleteTodo = id => {
    dispatch(actions.addCompleteTodo(id));
  };

  const handleDeleteCompleteTodo = id => {
    dispatch(actions.deleteCompleteTodo(id));
  };

  const handleEditTodo = (todo, id) => {
    dispatch(actions.editTodo({ todoValue: todo.target.value, todoId: id }));
  };

  return (
    <>
      <TodoInput
        todoInput={todoInput}
        handleInput={handleInput}
        handleAddTodo={handleAddTodo}
      />
      <Todolist
        todos={todos}
        completeTodos={completeTodos}
        handleDeleteTodo={handleDeleteTodo}
        handleEditTodo={handleEditTodo}
        handleCompleteTodo={handleCompleteTodo}
        handleDeleteCompleteTodo={handleDeleteCompleteTodo}
      />
    </>
  );
}
