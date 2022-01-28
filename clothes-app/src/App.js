import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

// import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [clothes, setClothes] = useState([])

  useEffect(() => {
    const getData = async () => {
      try {
        const { data }  = await axios.get(`https://5fd9d76f6cf2e7001737ead3.mockapi.io/api/v1/dress`)
        setClothes(data)
      } catch {
      }
    }
    getData()
  }, [])

  return (
  <div>App</div>
  )

}

export default App;
