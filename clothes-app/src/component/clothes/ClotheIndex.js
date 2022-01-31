import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Card } from 'react-bootstrap'
import ClotheCard from './ClotheCard'



const ClotheIndex = () => {
	const [dress, setDress] = useState([])
	// const [show, setShow] = useState(false)
	const [hasError, setHasError] = useState(false)
	// const [target, setTarget] = useState(null)
	// const ref = useRef(null);





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
		<div className="row">
			<div className="col-md-6">
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
			</div>
		</div>
	)
}

export default ClotheIndex;
