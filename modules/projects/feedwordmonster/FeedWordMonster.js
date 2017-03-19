import React from 'react'

import ProjectTemplate from '../common/ProjectTemplate'
import SkillsSection from '../common/SkillsSection'


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
  marginBottom:'40px'
}

const detailedHeader = 'Perfection. Absolute.'
const detailedBody = 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.'

const skills = ['alpha', 'bravo', 'charlie', 'delta', 'echo', 'foxtrot', 'golf', 'hotel', 'India', 'Juliett', 'Kilo', 'Lima', 'Mike', 'November', 'Oscar', 'Papa', 'Quebec', 'Romeo', 'Sierra', 'Tango', 'Uniform', 'Victor', 'Whiskey', 'X-ray', 'Yankee', 'Zulu']

/*<img 
    src='https://placeholdit.imgix.net/~text?txtsize=33&txt=awesome+screenshot!&w=1000&h=540'
    style={detailedImgStyle}
/>*/  

export default React.createClass({
  render() {
  	let title = 'Feed Word Monster' 
  	let videoURL = "https://www.youtube.com/embed/VSopObQb8zk"
  	let projectID = 'feedwordmonster' 

  	return <div>
  		<ProjectTemplate title={title} projectID={projectID} videoURL={videoURL}/>
  		{/*This part may be different for each project*/}
  		<section>
      	<div className='container'>
        	<p style={detailedHeaderStyle}>
          	<strong>{detailedHeader}</strong>
          </p>
          <p style={detailedBodyStyle}>
            {detailedBody}
          </p>

         	<img 
          	src='./images/projects/feedwordmonster/thinking.jpg'
            style={detailedImgStyle}
          />  
          <p style={detailedBodyStyle}>
            This is some text about Word Monster thinking a word. Maybe mention that he is non-verbal?
          </p>

          <img 
            src='./images/projects/feedwordmonster/correct.jpg'
            style={detailedImgStyle}
          /> 
          <p style={detailedBodyStyle}>
            When you feed him the correct word hs is happy and you claim a reward.
          </p>


          <img 
            src='./images/projects/feedwordmonster/sleeping.jpg'
            style={detailedImgStyle}
          /> 
           <p style={detailedBodyStyle}>
            After a period of inactivity Word Monster falls asleep and starts snoring.
          </p>

          <p style={detailedBodyStyle}>
            We have a set of beautiful colours that we randomly choose at the start of each game. This chosen colour is then used for the UI, progress bar, table and pause menu.
          </p>

         </div>
      </section>

      <SkillsSection skills={skills}/>
  	</div>
  }
})