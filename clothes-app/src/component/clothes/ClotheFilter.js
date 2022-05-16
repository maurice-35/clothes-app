import React, { useEffect, useState, useRef } from 'react'
import { Col, Card, Popover, Button, Overlay } from 'react-bootstrap'


const ClotheFilter = (props) => {
	console.log('props', props.filtered)
	const [clothes, setClothes] = useState(false)
	const [show, setShow] = useState(false)
	const [target, setTarget] = useState(null)
	const ref = useRef(null);



	useEffect(() => {
		if (props.filtered.filtered === 'No matched searches') {
			setClothes(false)
		} else {
			setClothes(props.filtered)
		}
	}, [props.filtered])


	const handleClick = (event) => {
		setShow(!show)
		setTarget(event.target)
	}

	return (
		<section>
			<div>
				<Col>
					{!clothes ? <p classname='hi'>No results</p> : <div className='hi'>
						{props.filtered.map(item =>
							<>
								<Card.Img variant="top" src={item.img} alt={item.name} />
								<Card.Body>
									<Card.Title>{item.title}</Card.Title>
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
															<strong>{item.description}</strong>
														</Popover.Body>
													</Popover>
												</Overlay>
											</div>
										</Card.Text>
									</div>
								</Card.Body>
								<Card.Footer>
									<small className="text">Name: {item.name}</small><br />
									<small className="text">User Name: {item.userName}</small><br />
									<small className="text">Price: £{item.price}</small><br />
									<small className="text">Comment: {item.comment}</small>
								</Card.Footer>
							</>)}
					</div>}
				</Col>
			</div>
		</section>
	)
}

export default ClotheFilter