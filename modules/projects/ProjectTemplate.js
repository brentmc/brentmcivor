import React from 'react'
import ProjectHeader from './ProjectHeader'

const imageStyle = {
  width:'100%',
  height:'auto',
  'background-color': '#000',
  'background-position-x': 'center',
  'background-position-y': 'center',
  'background-repeat': 'no-repeat',
  'background-size': 'cover',
}

const ProjectTemplate = (props) => {

console.log(props)

  let bigImgURL = './images/' + props.projectID + '/' + props.projectID + '_big.jpeg'
  console.log('bigImgURL', bigImgURL)

    return (
      <div>

        <ProjectHeader/>

        <section>
          <img className='bigImage' src={bigImgURL} style={imageStyle}>
          </img>
        </section>

      	<section className='project-titleSection'>
      		<h1 className='project-title center'>
            <strong>
              {props.title}
            </strong>
           </h1>
      	</section>

      	<section className='project-videoSection'>
  	    	<iframe className='project-video center'
  	    		src={props.videoURL}
  	    		frameborder="0" allowfullscreen	    		
  	   			>
  	   		</iframe>
     		</section>

      	{props.children}

     </div>
  )
}

export default ProjectTemplate