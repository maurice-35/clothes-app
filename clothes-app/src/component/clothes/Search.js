import React from 'react'
import { Button } from 'react-bootstrap'


const Search = () => {


  const handleSubmit = (event) => {
    event.preventDefault()
      console.log(event.target.title.value)
    }


  return(
    <>
    <Button href="/clothe/:id" onSubmit={handleSubmit} variant="outline-success">search</Button>
    </>
  )
}

export default Search