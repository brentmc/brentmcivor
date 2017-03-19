import React from 'react'

const getImageStyle = {
  width:'100%',
  minHeight:'200px',
}

const BigImage = ({projectID}) => {
	const bigImgURL = './images/projects/' + projectID + '/' + projectID + '_big.jpg'

	return (
		<section>
       <img src={bigImgURL} style={getImageStyle}/>
     </section>
	)
}

export default BigImage