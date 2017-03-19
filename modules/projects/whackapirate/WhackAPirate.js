import React from 'react'

import ProjectTemplate from '../common/ProjectTemplate'
import SkillsSection from '../common/SkillsSection'

export default React.createClass({
  render() {
  	let title = 'Whack A Pirate' 
    let videoURL = "https://www.youtube.com/embed/VSopObQb8zk"
  	let projectID = 'whackapirate' 

  	return <div>
  		<ProjectTemplate title={title} projectID={projectID} videoURL={videoURL}/>


      <SkillsSection/>
  	</div>
  }
})