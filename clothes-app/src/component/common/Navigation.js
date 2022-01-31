import React from 'react'
import { Navbar, Container, Nav, Button } from 'react-bootstrap'
import { MDBCol, MDBIcon } from 'mdbreact'



const Navigation = () => {


	return (
		<div>
			<Navbar expand="lg">
				<Container fluid>
					<Navbar.Brand href="/Home">👗</Navbar.Brand>
					<Nav.Link href="/clothes">Clothes</Nav.Link>
						<MDBCol md="4">
							<div className="input-group md-form form-sm form-1 pl-0">
								<div classname="input-group-prepend">
									<span classname="input-group-text purple lighten-3" id="basic-text1">
										<MDBIcon className="text-white" icon="search" />
									</span>
								</div>
								<input className="form-control my-0 py-1" type="text" placeholder="Search" arial-label="Search" />
							</div>
							<Button variant="outline-success">Search</Button>
						</MDBCol>
					<Nav.Link href="/Home">Home</Nav.Link>
					<Navbar.Brand href="/Home">👗</Navbar.Brand>
				</Container>
			</Navbar>
		</div>
	)
}

export default Navigation;
