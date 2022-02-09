import React from 'react'
import { Button } from 'react-bootstrap'


const Search = ({ title}) => {
  

  const handleSubmit = (event) => {
    event.preventDefault()
      console.log(event.target.title.value)
    }


  return(
    <>
    <Button href={`/clothes/${title}`}
    onSubmit={handleSubmit} 
    variant="outline-success">search
    </Button>
    </>
  )
}

export default Search