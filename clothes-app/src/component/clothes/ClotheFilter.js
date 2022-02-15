import React, { useEffect, useState } from 'react'
import ClotheShow from './ClotheShow'
import { Card } from 'react-bootstrap'


const ClotheFilter = (props) => {
	console.log('props', props.filtered)
	const [clothes, setClothes] = useState(false)


	useEffect(() => {
		if (props.filtered.filtered === 'No matched searches') {
			setClothes(false)
			console.log('Here')
		} else {
			setClothes(props.filtered)
		}
	}, [props.filtered])


	return (
		<>
			{!clothes ? <p classname='hi'>No results</p> : <div className='hi'>
				{props.filtered.map(item =>
					<>
						<Card.Img variant="top" src={item.img} alt={item.name} />
						<Card.Title>{item.title}</Card.Title>
					</>)}
			</div>}
		</>
	)
}

export default ClotheFilter