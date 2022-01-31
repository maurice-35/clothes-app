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

	console.log("dress", dress)

	return (
		<div className="section">
			<Row className="grid-container">
					<Col className="col-md-6">
						
							{dress ?
										<Card.Text>
											{dress.map(clothe => (
												<ClotheCard key={clothe.id} {...clothe} />
											))}
										</Card.Text>
								:
								<h2 className="index">
									{hasError ? 'Something went wrong' : '...loading'}
								</h2>
							}
						
					</Col>
					</Row>
			</div>
	)
}

export default ClotheIndex;
