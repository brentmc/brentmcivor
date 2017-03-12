import React from 'react'

import ProjectTemplate from '../common/ProjectTemplate'
import SkillsSection from '../common/SkillsSection'

export default React.createClass({
  render() {
  	let title = 'Word Mania Multiplayer' 
    let videoURL = "https://www.youtube.com/embed/VSopObQb8zk"
  	let projectID = 'wordmaniamulti' 

  	return <div>
  		<ProjectTemplate projectID={projectID} videoURL={videoURL}/>


      <SkillsSection/>
  	</div>
  }
})