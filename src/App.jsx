import { Route, Routes } from 'react-router-dom';
import './App.css';
import Character from './assets/layout/Character';
import Footer from './assets/layout/Footer';
import Header from './assets/layout/Header';
import About from './assets/Pages/About';
import Contact from './assets/Pages/Contact';
import Countries from './assets/Pages/Counties';
import Home from './assets/Pages/Home';
import Pokemon from './assets/Pages/Pokemon';

function App() {

  return <div className="App">
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/*' element={<h1>Not Found</h1>}/> 
      <Route path='/character/:id' element={<Character/>}/>
      <Route path='/pokemon/:name' element={<Pokemon/>}/>
      <Route path='/countries/:name' element={<Countries/>}/>
    </Routes>
    <Footer/>
  </div>;
}

export default App;
