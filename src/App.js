import React from 'react';

import './App.css';
import snk from '../src/assets/snk01.jpg'

import Header from './components/Header/Header';
import PostList from './components/PostList/PostList';

function App() {
  return (
    <>
    <Header/>
    <PostList/>
    {/* <img width="1024" src={snk} alt="Shingeki no Kyojin"/> */}
    </>
  )
}

export default App;
