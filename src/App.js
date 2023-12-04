import './App.css';
import Home from './Components/Home/Home';
import Login from './Components/Cliente/Login'; 
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='cliente' element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
