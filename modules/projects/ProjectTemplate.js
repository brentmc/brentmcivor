import React from 'react'
import ProjectHeader from './ProjectHeader'

const imageStyle = {
  width:'100%',
  height:'auto',
  backgroundColor: '#000',
  backgroundPositionX: 'center',
  backgroundPositionY: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'contain',
 // position:'absolute',
 // 'opacity':'20%',
 // top:'0px',
 // 'left':'0px'
}


const summaryStyle = {
  maxWidth:'700px',
  minWidth:'200px',
  minHeight:'675px',
  margin: 'auto',
  paddingTop: '20px',
  paddingBottom: '20px',
}


const videoSectionStyle = {
  backgroundColor:'#666666',
 // 'min-height':'800px',
}

const videoStyle = {
  //:'10px',
  margin: 'auto',
  marginTop:'125px',
  marginBottom:'125px',
 // 'max-width':'900px',
  width:'50vw',
  height:'28.125vw',
  //'min-height':'200px',
 // 'padding-bottom':'56.25%',
 // height:'100%',
 // frameborder:'0',

//  width:'560px',
  //height:'315px',
  //frameborder:'0',
}

const detailedSectionStyle = {
  width:'100%',
  minHeight:'150px',
  margin:'auto',
  backgroundColor:'#fff'
}

const skillsStyle = {
  width:'100%',
  minHeight:'150px',
  margin:'auto',
  backgroundColor:'#009bf2'
}

const summaryHeader = 'Out of clutter, find simplicity'
const summaryBody = 'We wanted to create a new game for teaching and testing word recognition.  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.'

const detailedHeader = 'Perfection. Uncompromised.'
const detailedBody = 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.'

const ProjectTemplate = (props) => {

console.log(props)

  let bigImgURL = './images/' + props.projectID + '/' + props.projectID + '_big.jpg'
  console.log('bigImgURL', bigImgURL)

    return (
      <div>

        <ProjectHeader/>

        <section>
          <img src={bigImgURL} style={imageStyle}>
          </img>
        </section>



      	<section>
      		<h1>
            <strong>{summaryHeader}</strong>
          </h1>
          <p style={summaryStyle}>{summaryBody}</p>
      	</section>

        {/* Move out to a separate video component file */}
      	<section className='debug' style={videoSectionStyle}>
  	    	<iframe className='debug'
            style={videoStyle}
  	    		src={props.videoURL}
  	    		frameBorder="0"
            allowFullScreen	    		
  	   			>
  	   		</iframe>
     		</section>

        <section className='debug' style={detailedSectionStyle}>
          <p>{detailedHeader}</p>
          <p>{detailedBody}</p>
        </section>

        {/* Move out to a separate skills component file */}
        <section className='debug' style={skillsStyle}>
          {/* Switch to use React Chips that float */}
          <ul>
            <li>ActionScript 3</li>
            <li>PureMVC</li>
            <li>Nape Phyiscs</li>
          </ul>

        </section>

      	{props.children}

     </div>
  )
}

export default ProjectTemplate