import React from 'react'

import { 
	Header,
	Grid,
	Cell
} from 'react-mdl';


const bannerStyle = {
	width:'100%',	
}

const bannerBackingStyle = {
	width:'100%',
	height:'118px',
	backgroundColor: '#0ff',
	opacity:'0.25',
	position: 'absolute',
  left: '0px',
  top: '0px',
  zIndex: '200',
}

const gridStyle = {
	width:'100%',
	height:'118px',
}


const nameStyle = {
	width:'100%',
	color:'#fff',
	margin:'5px',
	textAlign:'center',
	textShadow: '0px 2px 3px rgba(0, 0, 0, 0.1)',
	letterSpacing: '0.15em',
	textTransform: 'uppercase',
	zIndex: '101',
}


export default React.createClass({
	render() {
		return (
			<div style={bannerStyle}>
				<div style={bannerBackingStyle}>
				<Grid style ={gridStyle} className='debug'>
					<Cell className='debug'>
						<img src='/images/bm_logo.png'/>
					</Cell>
					<Cell className='debug'>
						<p style={nameStyle}>
							{/*<a href='/'>*/}
								<strong>Brent McIvor</strong>
							{/*</a>*/}
						</p>   
					</Cell>
				</Grid>				
			</div> 
		</div>				
		)
	}
})