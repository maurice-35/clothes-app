import React, { useState, useRef } from 'react'
import { Card, Popover, Button, Overlay } from 'react-bootstrap'

const ClotheCard = ({ id, img, title, description, name, userName, price, comment }) => {
	const [show, setShow] = useState(false)
	const [target, setTarget] = useState(null)
	const ref = useRef(null);


	const handleClick = (event) => {
		setShow(!show)
		setTarget(event.target)
	}

	return (
		<div className="container2">
			<Card.Img variant="top" src={img} alt={name} />
			<Card.Body>
				<Card.Title>{title}</Card.Title>
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
									<strong>{description}</strong>
								</Popover.Body>
							</Popover>
						</Overlay>
					</div>
				</Card.Text>
			</Card.Body>
			<Card.Footer>
				<small className="text">Name: {name}</small><br />
				<small className="text">User Name: {userName}</small><br />
				<small className="text">Price: £{price}</small><br />
				<small className="text">Comment: {comment}</small>
			</Card.Footer>
		</div>
	)

}

export default ClotheCard;
