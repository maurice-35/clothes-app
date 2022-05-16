import React, { useState, useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Col, Card, Popover, Button, Overlay } from 'react-bootstrap'



const ClotheShow = () => {
	const [clothe, setClothe] = useState({})
	const { id } = useParams()
	const [show, setShow] = useState(false)
	const [target, setTarget] = useState(null)
	const ref = useRef(null);


	useEffect(() => {
		const getData = async () => {
			try {
				const { data } = await axios.get(`https://5fd9d76f6cf2e7001737ead3.mockapi.io/api/v1/dress/${id}`)
				setClothe(data)
			} catch (err) {
			}
		}
		getData()
	}, [id])

	const handleClick = (event) => {
		setShow(!show)
		setTarget(event.target)
	}


	return (
		<section>
			<div>
				<Col>
					<Card.Img variant="top" src={clothe.img} alt={clothe.name} />
					<Card.Body>
						<Card.Title>{clothe.title}</Card.Title>
						<div>
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
						</div>
					</Card.Body>
					<Card.Footer>
						<small className="text">Name: {clothe.name}</small><br />
						<small className="text">User Name: {clothe.userName}</small><br />
						<small className="text">Price: £{clothe.price}</small><br />
						<small className="text">Comment: {clothe.comment}</small>
					</Card.Footer>
				</Col>
			</div>
		</section>
	)
}

export default ClotheShow
