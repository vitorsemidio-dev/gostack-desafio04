import React from 'react';

import './App.css';
import snk from '../src/assets/snk01.jpg'

import Header from './components/Header/Header';

function App() {
  return (
    <>
    <Header/>
    <img width="1024" src={snk} alt="Shingeki no Kyojin"/>
    </>
  )
}

export default App;
