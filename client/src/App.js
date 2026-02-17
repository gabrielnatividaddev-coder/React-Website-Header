import logo from './logo.svg';
import './App.css';
import '@mantine/core/styles.css';
import { Switch, Route, Navigate, Routes  } from 'react-router-dom';
import React from 'react';
import Header from './Header.js';
import Home from './Home.js';
import Features from './Features.js';
import About from './About.js';
import Help from './Help.js';
class App extends React.Component {
  render(){
    return <div className="App">
          <Header/>
          <Routes>
            <Route exact path='/' element={<Home/>} />
            <Route path='/features' element={<Features/>} />
            <Route path='/about' element={<About/>} />
            <Route exact path='/links' element={<Help/>} />
          </Routes >
          </div>
  }
}

export default App;