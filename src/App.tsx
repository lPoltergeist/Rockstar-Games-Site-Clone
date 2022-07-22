import React from 'react';
import Boletim from './components/boletim/boletim';
import Navbar from './components/navbar/navbar';
import News from './components/news/news';
import Global from './styles/global';

function App() {
  return (
   <>
   <Navbar/>
   <News/>
   <Boletim/>
    <Global/>
    </>
  );
}

export default App;
