import React from 'react'
import ProjectTemplate from './ProjectTemplate'

import {ORANGE} from './ProjectConsts'

const StubmunkSentence = props => {
	//let orange = ORANGE

	console.log('ORANGE', ORANGE)

  return (
  	<ProjectTemplate 
	   	{...props} 
	   	title='Stubmunk Sentence' 
	   	videoURL="https://www.youtube.com/embed/nkEzRX8fLxo" 
	   	bgColour = {ORANGE}
	 	>

  	<div>SS</div>
   </ProjectTemplate>
  )
}

export default StubmunkSentence