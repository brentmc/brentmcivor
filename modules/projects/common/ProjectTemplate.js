import React from 'react'

import ProjectHeader from '../common/ProjectHeader'
import BigImage from '../common/BigImage'
import SummarySection from '../common/SummarySection'
import VideoSection from '../common/VideoSection'


const ProjectTemplate = ({title, projectID, summaryObj, videoURL}) => {
    return (
      <div>
        <ProjectHeader/>
        <BigImage title={title} projectID={projectID}/>
        <SummarySection summaryObj={summaryObj}/>
        <VideoSection videoURL={videoURL}/>
     </div>
  )
}

export default ProjectTemplate