import { useState } from 'react';

import Dashboard from './components/Dashboard';
import './styles/App.css';

function App() {
  const [todos, setTodos] = useState()

  return (
    <div className="App">
      <Dashboard />
    </div>
  );
}

export default App;
