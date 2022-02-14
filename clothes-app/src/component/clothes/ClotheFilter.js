import React from 'react'

const ClotheFilter = (props)  => {
	console.log('props', props.filtered[0].description)
	
	
	return (
		<div className='hi'> {props.filtered.map(item => item.description)} </div>
	)
}

export default ClotheFilter