import './App.css';
import { TodoLayout } from './pages/index';

function App() {
  return (
    <div className='container mx-auto mt-4 App'>
      <h1 className='flex items-center justify-center mt-4 text-5xl'>
        Todo List
      </h1>
      <TodoLayout />
    </div>
  );
}

export default App;
