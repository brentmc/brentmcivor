import React from 'react'

import BigImage from '../common/BigImage'
import SummarySection from '../common/SummarySection'
import VideoSection from '../common/VideoSection'


const ProjectTemplate = ({title, projectID, summary, videoURL}) => {
		summary = summary ? summary : 'Summary Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius mauris nec dapibus placerat. Nunc luctus dui in mi lobortis, non tincidunt ipsum venenatis. Vivamus egestas lacinia erat nec posuere. Phasellus a erat lacus. Nam pharetra orci pretium ipsum lacinia elementum. Curabitur vitae eros convallis mi vehicula venenatis ac ac lacus. Vestibulum ultrices id odio vel sollicitudin. Morbi venenatis, massa sed auctor faucibus, diam mi dictum enim, sed bibendum dui mi ac mi. Aliquam purus sem, pharetra id aliquet sit amet, vestibulum sit amet metus. Etiam venenatis hendrerit convallis.'

    return (
      <div>
        <BigImage projectID={projectID}/>
        <SummarySection title={title}  summary={summary}/>
        <VideoSection videoURL={videoURL}/>
     </div>
  )
}

export default ProjectTemplate