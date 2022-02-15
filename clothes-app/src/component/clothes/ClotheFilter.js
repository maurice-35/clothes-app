import React, { useEffect, useState } from 'react'
import ClotheShow from './ClotheShow'


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
				{props.filtered.map(item => item.price)}	</div>}
		</>
	)
}

export default ClotheFilter