import React from 'react'

import SkillChip from './SkillChip';

const skillsSectionStyle = {
  width:'100%',
  minHeight:'150px',
  backgroundColor:'#009bf2'
}

const skillsContainerStyle = {
  height:'100%',
  paddingTop:'23px',
  paddingBottom:'20px',
}

const SkillsSection = (props) => {
	return (
		<section style={skillsSectionStyle}>
      <div style={skillsContainerStyle} className='container center'>

        {props.skills && props.skills.map(skill => {
          return (
            <SkillChip key={skill} skill={skill}/>
          )
        })} 

      </div>
    </section>
	)
}

export default SkillsSection