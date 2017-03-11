import React from 'react'

import ProjectHeader from '../common/ProjectHeader'
import BigImage from '../common/BigImage'
import SummarySection from '../common/SummarySection'
import VideoSection from '../common/VideoSection'


const ProjectTemplate = (props) => {
    return (
      <div>
        <ProjectHeader/>
        <BigImage projectID={props.projectID}/>
        <SummarySection/>
        <VideoSection videoURL={props.videoURL}/>
     </div>
  )
}

export default ProjectTemplate