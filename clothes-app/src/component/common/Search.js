// import React, { useState } from "react";
// // import { Button } from 'react-bootstrap'

// const Search = (props) => {
//   const [search, setInput] = useState('');

//   const handleSubmit = (event) => {
//     event.preventDefault()
//     //validation here
//     props.onSubmit(search)
//     if(props === 'title') {
// 			return true
// 		} else {
// 			return 'No Matches'
// 		}
//   }

//   return (
    // <Button 
    //   placeholder="Search" 
    //   value={search}
    //   onChange={(event) => setInput(event.target.value)}>search
    // </Button>
//     <form onSubmit={handleSubmit}>
//     <input
//       type="text"
//       placeholder="Search"
//       value={search}
//       onChange={(event) => setInput(event.target.value)}
//     />

//   <button/>
// </form>

//   )
// }

// export default Search







// import React, { useState, useEffect } from 'react'
// import axios from 'axios'
// import { Button } from 'react-bootstrap'
// import { MDBCol } from 'mdbreact'
// import { Link } from 'react-router-dom'



// export const SearchClothe = (props) => {
// 	const [search, setSearch] = useState([])
// 	const [filteredData, setFilteredData] = useState(search)
// 	const [searchParam, setSearchParam] = useState("")


// 	// useEffect(() => {
// 	// 	axios('https://5fd9d76f6cf2e7001737ead3.mockapi.io/api/v1/dress')
// 	// 		.then(response => {
// 	// 			console.log(response.data)
// 	// 			setSearchClothe(response.data)
// 	// 			setFilteredData(response.data)
// 	// 		})
// 	// 		.catch(error => {
// 	// 			console.log(' Getting error: ' + error)
// 	// 		})
// 	// }, [])

// 	useEffect(() => {
// 		const getData = async () => {
// 			try {
// 				const { data } = await axios.get('https://5fd9d76f6cf2e7001737ead3.mockapi.io/api/v1/dress')
// 				setSearch(data)
// 				filteredData(data)
// 			} catch (error) {
// 				console.log(error)
// 			}
// 		}
// 		getData()
// 	}, [])


// 	const handleSearch = (event) => {
// 		let value = event.target.value.toUpperCase()
// 		let result = []
// 		console.log(value)
// 		result = search.filter((data) => {
// 			return data.title.search(value) !== -1
// 		})
// 		setFilteredData(result)
// 		console.log(result)
// 	}


// 	// const search = (result) => {
// 	// 	return result.filter((item) => {
// 	// 		if (item.title === filteredData) {
// 	// 			return searchParam.some((newItem) => {
// 	// 				return (item[newItem.toUpperCase()])
// 	// 			})
// 	// 		} else {
// 	// 			return 'No matched items'
// 	// 		}
// 	// 	})
// 	// }
// 	// const displaySearch = () => {
// 	// 	if ('clothe.id' === 'result') {
// 	// 		return true
// 	// 	} else {
// 	// 		return 'No matches'
// 	// 	}
// 	// }
// 	const handleSubmit = (e) => {
//     e.preventDefault()
// 		// console.log(e.target.element.title.value)
//     setSearchParam(e.target.value.title)
// 		props.onSubmit(searchParam)
		
// 		// return ('/clothes')
//   }

// 	// return filteredData


// 	return (
// 		<MDBCol md="4">
// 			<div className="input-group md-form form-sm form-1 pl-0" {...filteredData.map((value, index) => {
// 				return (
// 					<div>
// 						<div key={value.id}>
// 							{/* {value.title} */}
// 						</div>
// 					</div>
// 				)
// 			})}>
// 				<div className="input-group-prepend">
// 				</div>
// 				<input className="form-control my-0 py-1" type="text" onChange={(event) =>
// 					handleSearch(event)}
// 					placeholder="Search" arial-label="Search" />
// 			</div>
// 			<div>
// 			<Button onSubmit={handleSubmit}  variant="outline-success">Search</Button>
// 			{/* <Link to={`/clothes/`}></Link> */}
// 			</div>
// 		</MDBCol>
// 	)
// }

// export default SearchClothe

