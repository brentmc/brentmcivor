import React from 'react'

const getImageStyle = (img) => ({
  background: 'url('+img+') no-repeat center center',
  backgroundSize: 'cover',
  height:'425px',
  minHeight:'200px',
  overflow:'hidden',
  position:'relative',
  boxSizing:'border-box'
})

const BigImage = (props) => {

	let bigImgURL = './images/projects/' + props.projectID + '/' + props.projectID + '_big.jpg'
  console.log('bigImgURL', bigImgURL)

	return (
		<section>
     	<div style={getImageStyle(bigImgURL)}>
       </div>
     </section>
	)
}

export default BigImage