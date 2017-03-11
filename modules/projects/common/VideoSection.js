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

const VideoSection = (props) => {
	return (
		<section style={videoSectionStyle}>
      <div className='container debug'>
        <iframe className='debug'
          style={videoStyle}
          src={props.videoURL}
          frameBorder="0"
          allowFullScreen         
        >
        </iframe>
      </div>
    </section>
	)
}

export default VideoSection