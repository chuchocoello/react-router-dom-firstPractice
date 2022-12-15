import { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './assets/layout/Header';
import About from './assets/Pages/About';
import Contact from './assets/Pages/Contact';
import Home from './assets/Pages/Home';

function App() {
  const [count, setCount] = useState(0);

  return <div className="App">
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/*' element={<h1>Not Found</h1>}/> 
    </Routes>
  </div>;
}

export default App;
