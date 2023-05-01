import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Form from './pages/form';

function App() {

  return (
    <div className="App">
      <h1>Open Formulieren create react app</h1>

      <BrowserRouter>
        <Routes>
          <Route path="/sup/hello" element={<Form />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
