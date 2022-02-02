import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { MDBCol } from 'mdbreact'
import SearchClothe from './SearchClothe'



const Navigation = () => {
	

	return (
		<Navbar expand="lg">
			<nav className="navbar fixed-top navbar-light bg-light">
				<Container fluid>
					<Navbar.Brand href="/Home">👗</Navbar.Brand>
					<Nav.Link href="/clothes">Clothes</Nav.Link>
					<MDBCol md="4">
						<SearchClothe />
					</MDBCol>
					<Nav.Link href="/Home">Home</Nav.Link>
					<Navbar.Brand href="/Home">👗</Navbar.Brand>
				</Container>
			</nav>
		</Navbar>
	)
}

export default Navigation
