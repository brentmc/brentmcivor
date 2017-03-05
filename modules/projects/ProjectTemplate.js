import React from 'react'
import ProjectHeader from './ProjectHeader'

const CONTAINER_WIDTH = '80%'

const getImageStyle = (img) => ({
  background: 'url('+img+') no-repeat center center',
  backgroundSize: 'cover',
  height:'425px',
  minHeight:'200px',
  overflow:'hidden',
  position:'relative',
  boxSizing:'border-box'
})
 //ight:'auto',
 //backgroundColor: '#000',
 //backgroundPositionX: 'center',
 //backgroundPositionY: 'center',
 //backgroundRepeat: 'no-repeat',
 // backgroundSize: 'contain',


 // position:'absolute',
 // 'opacity':'20%',
 // top:'0px',
 // 'left':'0px'
//}

const containerStyle = {
  width:CONTAINER_WIDTH,
  maxWidth:'1000px',
  minWidth:'200px',
  margin: 'auto',
}

const summaryHeaderStyle = {
  width:'100%',
  fontSize: '64px',
  paddingTop: '140px',
  lineHeight: '60px',
}


const summaryBodyStyle = {
  width:'100%',
  //minHeight:'675px',
//  margin: 'auto',
  paddingTop: '40px',
  paddingBottom: '140px',
}


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

const detailedSectionStyle = {
 // width:WIDTH,
 // maxWidth:'1000px',
 // minWidth:'200px',
 // margin: 'auto',
 // minHeight:'150px',
 // margin:'auto',
 // backgroundColor:'#fff'
}

const detailedHeaderStyle = {
  width:'100%',
  
  
  fontSize: '64px',
  marginTop: '140px',
  lineHeight: '60px',
}


const detailedBodyStyle = {
  width:'100%',
  marginTop: '40px',
}

const detailedImgStyle = {
  width:'100%',
  marginTop:'40px',
  marginBottom:'140px'
}


const skillsSectionStyle = {
  width:'100%',
  minHeight:'150px',
  //margin:'auto',
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
          <div style={getImageStyle(bigImgURL)}>
          </div>
        </section>

      	<section>
          <div style={containerStyle} className='debug'>
        		<p style={summaryHeaderStyle}>
              <strong>{summaryHeader}</strong>
            </p>
            <p style={summaryBodyStyle}>{summaryBody}</p>
          </div>
      	</section>

        {/* Move out to a separate video component file */}
      	<section style={videoSectionStyle}>
          <div style={containerStyle} className='debug'>
    	    	<iframe className='debug'
              style={videoStyle}
    	    		src={props.videoURL}
    	    		frameBorder="0"
              allowFullScreen	    		
    	   			>
    	   		</iframe>
          </div>
     		</section>

        <section>
          <div style={containerStyle} className='debug'>
            <p style={detailedHeaderStyle}>
              <strong>{detailedHeader}</strong>
            </p>
            <p style={detailedBodyStyle}>
              {detailedBody}
            </p>
            <img 
              src='https://placeholdit.imgix.net/~text?txtsize=33&txt=awesome+screenshot!&w=1000&h=540'
              style={detailedImgStyle}
            />  

          </div>
        </section>

        {/* Move out to a separate skills component file */}
        <section style={skillsSectionStyle}>
          <div style={containerStyle} className='debug'>
            {/* Switch to use React Chips that float */}
            <ul>
              <li>ActionScript 3</li>
              <li>PureMVC</li>
              <li>Nape Phyiscs</li>
            </ul>
          </div>
        </section>

      	{props.children}

     </div>
  )
}

export default ProjectTemplate