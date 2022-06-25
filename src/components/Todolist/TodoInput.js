import React from 'react';

export default function TodoInput(props) {
  const { todoInput, handleInput, handleAddTodo } = props;

  return (
    <div className='flex justify-center mt-4'>
      <label className='flex-initial w-4/12'>
        <input
          className='block w-full py-2 pr-3 bg-white border rounded-md shadow-sm placeholder:italic placeholder:text-slate-400 border-slate-300 pl-9 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm'
          placeholder='What todo today...?'
          type='text'
          value={todoInput}
          onChange={e => handleInput(e)}
        />
      </label>
      <button
        onClick={handleAddTodo}
        className='flex-initial w-40 p-1 ml-4 text-white rounded-full bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300'
      >
        Add Todo
      </button>
    </div>
  );
}
