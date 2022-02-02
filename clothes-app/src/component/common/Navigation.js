import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Navbar, Container, Nav, Button } from 'react-bootstrap'
import { MDBCol } from 'mdbreact'



const Navigation = () => {
	const [searchClothe, setSearchClothe] = useState([])
	const [filteredData, setFilteredData] = useState(searchClothe)


	useEffect(() => {
		axios('https://5fd9d76f6cf2e7001737ead3.mockapi.io/api/v1/dress')
			.then(response => {
				console.log(response.data)
				setSearchClothe(response.data)
				setFilteredData(response.data)
			})
			.catch(error => {
				console.log(' Getting error: ' + error)
			})
	}, [])


	const handleSearch = (event) => {
		let value = event.target.value.toUpperCase()
		let result = []
		console.log(value)
		result = searchClothe.filter((data) => {
			return data.title.search(value) !== -1
		})
		setFilteredData(result)
		console.log(result)
	}



	return (
		<Navbar expand="lg">
			<nav className="navbar fixed-top navbar-light bg-light">
				<Container fluid>
					<Navbar.Brand href="/Home">👗</Navbar.Brand>
					<Nav.Link href="/clothes">Clothes</Nav.Link>
					<MDBCol md="4">
						<div className="input-group md-form form-sm form-1 pl-0" {...filteredData.map((value, index) => {
								return (
									<div>
										<div key={value.id}>
											{value.title}
										</div>
									</div>
								)
							})}>
							<div className="input-group-prepend">
							</div>
							<input className="form-control my-0 py-1" type="text" onChange={(event) =>
								handleSearch(event)} placeholder="Search" arial-label="Search" />
						</div>
						<Button
							variant="outline-success">Search</Button>
					</MDBCol>
					<Nav.Link href="/Home">Home</Nav.Link>
					<Navbar.Brand href="/Home">👗</Navbar.Brand>
				</Container>
			</nav>
		</Navbar>
	)
}

export default Navigation
