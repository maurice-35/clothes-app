import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Card, Row, Col } from 'react-bootstrap'
import ClotheCard from './ClotheCard'



const ClotheIndex = () => {
	const [dress, setDress] = useState([])
	const [hasError, setHasError] = useState(false)


	useEffect(() => {
		const getData = async () => {
			try {
				const { data } = await axios.get('https://5fd9d76f6cf2e7001737ead3.mockapi.io/api/v1/dress')
				setDress(data)
			} catch (err) {
				setHasError(true)
			}
		}
		getData()
	}, [])


	return (
		<Row xs={1} md={2} className="g-4">
			<Col>
				<Card>
					{dress.length > 0 ?
						<>
							<Card.Img variant="top" src="holder.js/100px160" /><Card.Body>
								<Card.Title>Card title</Card.Title>
								<Card.Text>
									{dress.map(clothe => (
										<ClotheCard key={clothe.id} {...clothe} />
									))}
								</Card.Text>
							</Card.Body>
						</>
						:
						<h2 className="index">
							{hasError ? 'Something went wrong' : '...loading'}
						</h2>
					}
				</Card>
			</Col>
		</Row>
	)
}

export default ClotheIndex;
