import Calculator from './components/Calculator';
import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Quote from './pages/Quote'

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
      <Navbar />
      <div className='App'>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/calculator' element={<Calculator />} />
        <Route path='/quote' element={<Quote />} />
      </Routes>
      </div>
    </>
    );
  }
}

export default App;
