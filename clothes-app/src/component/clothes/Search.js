import React from 'react'
import { Button } from 'react-bootstrap'



const Search = (props) => {


  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(event.target.title.value)
    props.onSearch('hi')
  }


  return (
    <>
      <Button
        onClick={handleSubmit}
        variant="outline-success" >search
      </Button>
    </>
  )
}

export default Search