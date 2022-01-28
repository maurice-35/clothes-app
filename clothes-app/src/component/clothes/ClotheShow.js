import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

const ClotheShow = () => {
		const [dress, setDress] = useState([])

		useEffect(() => {
			const getData = async () => {
				try {
					const { data } = await axios.get(`https://5fd9d76f6cf2e7001737ead3.mockapi.io/api/v1/dress`)
					setDress(data)
				} catch {
				}
			}
			getData()
		}, [])
	
		return (
			<Card style={{ width: '30rem' }}>
				<Card.Body>
					<Card.Title>Clothe Title</Card.Title>
					<Card.Text>
						Description
					</Card.Text>
				</Card.Body>
				<ListGroup className="list-group-flush">
					<ListGroupItem>Name:</ListGroupItem>
					<ListGroupItem>User Name:</ListGroupItem>
					<ListGroupItem>Price:</ListGroupItem>
					<ListGroupItem>Comment:</ListGroupItem>
				</ListGroup>
			</Card>
		)
}

export default ClotheShow;
