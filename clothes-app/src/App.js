import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './component/common/Home';
import ClotheShow from './component/clothes/ClotheShow';
import Navigation from './component/common/Navigation';



const App = () => {


  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route exact path='/clothes' element={ <ClotheShow />} />
        <Route exact path='/Home' element={ <Home /> } />
      </Routes>
    </BrowserRouter>
  )

}

export default App;
