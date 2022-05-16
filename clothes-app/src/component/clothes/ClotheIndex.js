import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Card, Row, CardGroup } from 'react-bootstrap'
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
		<div>
			<Row className="grid-container">
				<CardGroup>
					<Card>
						{dress ?
							<CardGroup>
							<Card id="dress-map">
								{dress.map(clothe => (
									<ClotheCard key={clothe.id} {...clothe} />
								))}
							</Card>
							</CardGroup>
							:
							<h2 className="index">
								{hasError ? 'Please wait' : '...loading'}
							</h2>
						}
					</Card>
				</CardGroup>
			</Row>
		</div>
	)
}

export default ClotheIndex;
