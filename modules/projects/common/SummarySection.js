import React from 'react'

const summaryHeaderStyle = {
  width:'100%',
  fontSize: '64px',
  paddingTop: '140px',
  lineHeight: '60px',
}


const summaryBodyStyle = {
  width:'100%',
  //minHeight:'675px',
//  margin: 'auto',
  paddingTop: '40px',
  paddingBottom: '140px',
}

const summaryHeader = 'Out of clutter, find simplicity'
const summaryBody = 'We wanted to create a new game for teaching and testing word recognition.  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.'


const SummarySection = (props) => {
	return (
		<section>
      <div className='container debug'>
        <p style={summaryHeaderStyle}>
          <strong>{summaryHeader}</strong>
        </p>
        <p style={summaryBodyStyle}>{summaryBody}</p>
      </div>
    </section>
	)
}

export default SummarySection