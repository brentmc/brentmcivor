import React from 'react'
import { 
	Header,
	Grid,
	Cell
} from 'react-mdl';

const bannerStyle = {
	width:'100%',
	minHeight:'50px',
	backgroundColor: '#3b3b3b'
}

const brandStyle = {
	width:'90%',
	maxWidth:'600px',
	margin:'auto',
	paddingTop:'15px',
	paddingBotton:'15px'
}

const nameStyle = {
	fontSize: '30px',
	textTransform: 'uppercase',
	color:'#009bf2',
	fontFamily:"'Acumin Pro', 'Arial",
	lineHeight:'42px',
	padding:'100px',
	'margin':'100px'
}

const roleStyle = {
	fontSize: '30px',
	textTransform: 'uppercase',
	color:'#fff',
	fontFamily:"'Acumin Pro', 'Arial",
	lineHeight:'42px',
}

export default React.createClass({
	render() {
		return (
			<div style={bannerStyle}>
				<a href='/'>
					<div className='center' style={brandStyle}>
						<strong>
							<i>
								<span className='' style={nameStyle}>Brent McIvor </span>
								<span className='' style={roleStyle}>Developer</span>
							</i>
						</strong>	
					</div>
				</a>
			</div>
		)
	}
})