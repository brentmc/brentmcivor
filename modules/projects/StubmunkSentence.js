import React from 'react'
import ProjectTemplate from './ProjectTemplate'


export default React.createClass({
	//let orange = ORANGE

  render() {
    return <ProjectTemplate 
    	{...this.props} 
    	title='Stubmunk Sentence' 
    	videoURL="https://www.youtube.com/embed/nkEzRX8fLxo" 
    	>

    	<div>SS</div>
    </ProjectTemplate>
  }
})