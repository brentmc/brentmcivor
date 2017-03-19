import React from 'react'

const videoSectionStyle = {
  backgroundColor:'#3b3b3b',
}

/*
 * Video scaling magic is sourced from:
 * https://alistapart.com/article/creating-intrinsic-ratios-for-video
 */
const videoWrapper = {
  position: 'relative',
  paddingBottom: '56.25%', /* 16:9 */
  paddingTop: '25px',
  height: '0',
}

const iframe = {
  position: 'absolute',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
}


const VideoSection = (props) => {
	return (
		<section style={videoSectionStyle}>
      <div className='container'>
        <div style={videoWrapper}>

           <iframe style={iframe} 
           width="560" 
           height="349" 
           src={props.videoURL}
           frameBorder="0" 
           allowFullScreen></iframe>
        </div>
      </div>


    
    </section>
	)
}

export default VideoSection