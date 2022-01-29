import React from 'react';
import { Navbar, Container, Nav, Button, Form, FormControl } from 'react-bootstrap';


const Navigation = () => {

	return (
		<div>
			<Navbar expand="lg">
				<Container fluid> 
					<Navbar.Brand href="/Home">👗</Navbar.Brand>
					<Nav.Link href="/clothes">Clothes</Nav.Link>
					<Form className="d-flex">
						<FormControl
							type="search"
							placeholder="Search"
							className="me-"
							aria-label="Search"
						/>
						<Button variant="outline-success">Search</Button>
					</Form>
					<Nav.Link href="/Home">Home</Nav.Link>
					<Navbar.Brand href="/Home">👗</Navbar.Brand>
				</Container>
			</Navbar>
		</div>
	)
}

export default Navigation;
