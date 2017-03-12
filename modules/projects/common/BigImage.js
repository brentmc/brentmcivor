import React from 'react'

const containerStyle = {
height:'425px',
  minHeight:'200px',
  position:'relative',
  boxSizing:'border-box',
}

const getImageStyle = (img) => ({
  background: 'url('+img+') no-repeat center center',
  backgroundSize: 'cover',
  height:'425px',
  minHeight:'200px',
  overflow:'hidden',
  

  filter: 'blur(5px)',
})

const titleStyle = {
  zIndex:100,
  textAlign:'center',
  fontSize: '64px',
  position: 'absolute',
  bottom:'50px',
  width:'100%',
  color:'#fff',
  fontSize:'55px',
  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)',
  lineHeight:'50px',
  //letterSpacing: '0.15em',
  //textTransform: 'uppercase',

}

const BigImage = ({title, projectID}) => {
	const bigImgURL = './images/projects/' + projectID + '/' + projectID + '_big.jpg'

	return (
		<section>
     	<div style={containerStyle}>
        <div style={getImageStyle(bigImgURL)}/>
        <div style={titleStyle}>{title}</div>
      </div>       
     </section>
	)
}

export default BigImage