import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './component/common/Home'
import ClotheIndex from './component/clothes/ClotheIndex'
import ClotheShow from './component/clothes/ClotheShow'
import Navigation from './component/common/Navigation'
import Footer from './component/common/Footer'
import Search from './component/clothes/Search'
import ClotheFilter from './component/clothes/ClotheFilter';



const App = () => {

  const [clothesFiltered, setClothesFiltered] = useState({})
  const [handleToggle, setHandleToggle] = useState(false)
  const [handleClothesToggle, setHandleClothesToggle] = useState(false)
  const handleToggleResults = (toggle) => {
    if (handleToggle === false) {
      setHandleToggle(true)
    } else {
      setHandleToggle(false)
    }
  }

  const getSearchResults = (filteredClothes) => {
    if (filteredClothes === false) {
      console.log('No search results')
      setClothesFiltered({ filtered: 'No search' })
      setHandleClothesToggle(false)
    } else {
      setClothesFiltered(filteredClothes)
      setHandleClothesToggle(true)
    }
  }

  return (
    <BrowserRouter>
      <Navigation onSearch={handleToggleResults} searchResults={getSearchResults} />
      <Routes>
        <Route exact path='/search' element={<Search />} />
        <Route exact path='/clothes/:id' element={<ClotheShow />} />
        {!handleToggle && <Route exact path='/clothes' element={<ClotheIndex />} />}
        {handleToggle && <Route exact path='/clothes' element={<ClotheFilter filtered={clothesFiltered} />} />}
        {handleToggle && <Route exact path='/Home' element={<ClotheFilter filtered={clothesFiltered} />} />}
        {!handleToggle && <Route exact path='/Home' element={<Home />} {...handleClothesToggle} />}
        <Route exact path='/' element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )

}

export default App;
