import React from 'react';

export default function Todolist(props) {
  const {
    todos,
    handleDeleteTodo,
    completeTodos,
    handleEditTodo,
    handleCompleteTodo,
    handleDeleteCompleteTodo,
  } = props;

  return (
    <>
      {/* On Progress todo list */}
      <div>
        <h1 className='flex items-center justify-start w-3/5 pt-8 m-auto text-3xl'>
          On Progress
        </h1>
        {todos.map((todo, index) => (
          <div
            key={index}
            className='static flex items-center justify-center w-8/12 px-6 py-4 m-auto mt-4 rounded-lg shadow-sm ring-2 group ring-slate-400 '
          >
            <div className='w-[90%] flex items-center justify-between'>
              <span
                contentEditable={true}
                className='w-full text-2xl font-medium text-black '
              >
                {todo.title}
              </span>
              <button className='text-2xl font-medium text-black hover:text-yellow-500'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-6 h-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth='2'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z'
                  />
                </svg>
              </button>
            </div>
            <div className='flex rounded-r-lg transition-all duration-[.4s] w-0 overflow-hidden absolute left-[77%] h-[3rem] group-hover:w-28 bg-slate-700'>
              <button
                onClick={() => handleDeleteTodo(index)}
                className='justify-center m-auto transition-all duration-[.4s] bg-gradient-to-tl bg-size-200 from-red-400 via-red-600 to-red-400 bg-pos-0 hover:bg-pos-100 rounded-full px-2 py-2 text-white'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-6 h-6 text-2xl font-bold'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth='2'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              </button>
              <button
                onClick={() => handleCompleteTodo(index)}
                className='justify-center m-auto transition-all duration-[.4s] bg-gradient-to-tl bg-size-200 from-green-500 via-green-600 to-green-400 bg-pos-0 hover:bg-pos-100 rounded-full px-2 py-2 text-white'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-6 h-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth='2'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M5 13l4 4L19 7'
                  />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* On Complete todo list */}
      <div className=''>
        <h1 className='flex items-center justify-start w-3/5 pt-8 m-auto text-3xl'>
          Complete
        </h1>
        {completeTodos.map((todo, index) => (
          <div
            key={index}
            className='static flex items-center justify-center w-8/12 px-6 py-4 m-auto mt-4 rounded-lg shadow-xl group bg-gradient-to-l from-green-500 to-green-700'
          >
            <div className='w-4/5'>
              <span className='text-2xl font-medium text-white line-through'>
                {todo.title}
              </span>
            </div>
            <div className='bg-slate-700 flex rounded-r-lg transition-all duration-[.4s] w-0 overflow-hidden absolute left-[78%] right-auto h-[3rem] group-hover:w-28 shadow-xl'>
              <button
                onClick={() => handleDeleteCompleteTodo(index)}
                className='justify-center m-auto transition-all duration-[.4s] bg-gradient-to-tl bg-size-200 from-red-400 via-red-600 to-red-400 bg-pos-0 hover:bg-pos-100 rounded-full px-2 py-2 text-white'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-6 h-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth='2'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              </button>
            </div>
            {/* Date session */}
            {/* <details
              class='open:bg-white dark:open:bg-slate-900 open:ring-1 open:ring-black/5 dark:open:ring-white/10 open:shadow-lg p-6 rounded-lg'
              open
            >
              <summary class='text-sm leading-6 text-slate-900 dark:text-white font-semibold select-none'>
                Why do they call it Ovaltine?
              </summary>
              <div class='mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400'>
                <p>
                  The mug is round. The jar is round. They should call it
                  Roundtine.
                </p>
              </div>
            </details> */}
          </div>
        ))}
      </div>
    </>
  );
}
