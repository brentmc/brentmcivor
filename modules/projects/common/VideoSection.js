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

/**
 * I was having trouble adding top and bottom padding to the video wrapper
 * because of the other css magic I added. So I've added these bars above and below
 * the video instead
 */
const videoBar = {
  width:'100%',
  height:'100px',
  backgroundColor:'#3b3b3b'
}

const VideoSection = (props) => {
	return (
		<section style={videoSectionStyle}>
      <div className='container'>
        <div style={videoBar}/>
        <div style={videoWrapper}>

           <iframe style={iframe} 
           width="560" 
           height="349" 
           src={props.videoURL}
           frameBorder="0" 
           allowFullScreen></iframe>
        </div>
        <div style={videoBar}/>
      </div>


    
    </section>
	)
}

export default VideoSection