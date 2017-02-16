import React from 'react'
import ProjectTemplate from './ProjectTemplate'

export default React.createClass({
  render() {
    return <ProjectTemplate 
    	{...this.props} 
    	title='Feed Word Monster' 
    	videoURL="https://www.youtube.com/embed/VSopObQb8zk" 
    	bgColour='yellow'>
    	<div>FWM</div>
    </ProjectTemplate>
  }
})