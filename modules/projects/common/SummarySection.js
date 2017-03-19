import React from 'react'

const titleStyle = {
  width:'100%',
  fontSize: '64px',
  paddingTop: '60px',
  lineHeight: '60px',
  textAlign:'center'
}

const summaryStyle = {
  width:'100%',
  paddingTop: '40px',
  paddingBottom: '140px',
}

const SummarySection = ({title, summary}) => {
	return (
		<section>
      <div className='container'>
        <p style={titleStyle}>
          <strong><i>{title}</i></strong>
        </p>
        <p style={summaryStyle}>{summary}</p>
      </div>
    </section>
	)
}

export default SummarySection