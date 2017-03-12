import React from 'react'

const videoSectionStyle = {
  backgroundColor:'#666666',
 // 'min-height':'800px',
}

const videoStyle = {
  width:'100%',
// margin: 'auto',
  marginTop:'125px',
  marginBottom:'125px',
 // 'max-width':'900px',
 // width:'100%',
  //height:'28.125vw',

  //:'10px',
 // margin: 'auto',
 // marginTop:'125px',
 // marginBottom:'125px',
 // 'max-width':'900px',
 // width:'50vw',
 // height:'28.125vw',


  //'min-height':'200px',
 // 'padding-bottom':'56.25%',
 // height:'100%',
 // frameborder:'0',

//  width:'560px',
  //height:'315px',
  //frameborder:'0',
}

/*  <div className='container debug'>
        <iframe className='debug'
          style={videoStyle}
          src={props.videoURL}
          frameBorder="0"
          allowFullScreen         
        >
        </iframe>
      </div>*/


const videoWrapper = {
  position: 'relative',
  paddingBottom: '56.25%', /* 16:9 */
  paddingTop: '25px',
  height: '0',
 // marginTop
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