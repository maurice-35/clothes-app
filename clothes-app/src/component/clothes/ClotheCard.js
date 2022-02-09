import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ClotheCard = ({ id, img, title, name }) => {

	return (
		<div className="container2">
				<Card.Img variant="top" src={img} alt={name} />
				<Link to={`/clothes/${id}`}>
				<Card.Body>
					<Card.Title>{title}</Card.Title>			
				</Card.Body>
			</Link>
		</div>
	)

}

export default ClotheCard;
