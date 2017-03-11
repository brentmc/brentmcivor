import React from 'react'

const skillsSectionStyle = {
  width:'100%',
  minHeight:'150px',
  //margin:'auto',
  backgroundColor:'#009bf2'
}

const SkillsSection = (props) => {
	return (
		<section style={skillsSectionStyle}>
      <div className='container debug'>
        {/* Switch to use React Chips that float */}
        <ul>
          <li>ActionScript 3</li>
          <li>PureMVC</li>
          <li>Nape Phyiscs</li>
        </ul>
      </div>
    </section>
	)
}

export default SkillsSection