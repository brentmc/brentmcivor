import React from 'react'

import ProjectTemplate from '../common/ProjectTemplate'
import SkillsSection from '../common/SkillsSection'

const summaryHeader = "Summary Header"
const summaryBody = "Summary Body"
const summaryObj = {summaryHeader, summaryBody}

export default React.createClass({
  render() {
  	let title = 'Alphabetical Word Monster' 
    let videoURL = "https://www.youtube.com/embed/VSopObQb8zk"
  	let projectID = 'alphabeticalwordmonster' 

  	return <div>
  		<ProjectTemplate title={title} projectID={projectID} summaryObj={summaryObj} videoURL={videoURL}/>


      <SkillsSection/>
  	</div>
  }
})