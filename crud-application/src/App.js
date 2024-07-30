import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Create from './components/Create';
import Edit from './components/Edit';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    
    <div className="App">
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/create' element={<Create/>} />
      <Route path={"/edit/:Id"} element={<Edit/>} />

    </Routes>
   
  
    </div>
  );
}

export default App;
