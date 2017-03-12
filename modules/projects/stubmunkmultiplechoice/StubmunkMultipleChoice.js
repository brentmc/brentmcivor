import React from 'react'

import ProjectTemplate from '../common/ProjectTemplate'
import SkillsSection from '../common/SkillsSection'

export default React.createClass({
  render() {
  	let title = 'Stubmunk Multiple Choice' 
    let videoURL = "https://www.youtube.com/embed/VSopObQb8zk"
  	let projectID = 'stubmunkmultiplechoice' 

  	return <div>
  		<ProjectTemplate projectID={projectID} videoURL={videoURL}/>


      <SkillsSection/>
  	</div>
  }
})