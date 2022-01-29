import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios';

import { Card, ListGroup, ListGroupItem, Popover, Button, Overlay } from 'react-bootstrap'


const ClotheShow = () => {
	const [dress, setDress] = useState([])
	const [show, setShow] = useState(false)
	const [hasError, setHasError] = useState(false)
	const [target, setTarget] = useState(null)
	const ref = useRef(null);





	useEffect(() => {
		const getData = async () => {
			try {
				const { data } = await axios.get(`https://5fd9d76f6cf2e7001737ead3.mockapi.io/api/v1/dress`)
				setDress(data)
			} catch (err) {
				setHasError(true)
			}
		}
		getData()
	}, [])


	const handleClick = (event) => {
		setShow(!show);
		setTarget(event.target);
	};

	return (
		<section>
			<div className="show">
				{dress ?
					<div className="map">
						{dress.map(clothe => (
							<>
								<Card
									style={{ width: '30rem' }} /><Card.Img variant="top" src={clothe.img} alt={clothe.name} />
								<Card.Body>
									<Card.Title>{clothe.title}</Card.Title>
									<Card.Text>
										<div ref={ref}>
											Description<Button variant="outline-success" id="button" onClick={handleClick}>Click me!</Button>
											<Overlay
												show={show}
												target={target}
												placement="right"
												container={ref}
												containerPadding={20}
											>
												<Popover id="popover-contained">
													<Popover.Header as="h3">Hello!</Popover.Header>
													<Popover.Body>
														<strong>{clothe.description}</strong> 
													</Popover.Body>
												</Popover>
											</Overlay>
										</div>
									</Card.Text>
								</Card.Body>
								<ListGroup className="list-group-flush">
									<ListGroupItem>Name: {clothe.name}</ListGroupItem>
									<ListGroupItem>User Name: {clothe.userName}</ListGroupItem>
									<ListGroupItem>Price: £{clothe.price}</ListGroupItem>
									<ListGroupItem>Comment: {clothe.comment}</ListGroupItem>
								</ListGroup>
							</>
						))}
					</div>
					:
					<h2 className="error">
						{hasError ? 'Something went wrong!' : '...loading'}
					</h2>
				}
			</div>
		</section>
	)
}

export default ClotheShow;
