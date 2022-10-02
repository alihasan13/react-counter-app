import logo from './logo.svg';
import './App.css';
import Counter from './components/counter/Counter';

function App() {
  return (
    <div className="App block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <Counter/>
    </div>
  );
}

export default App;
