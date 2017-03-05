import React from 'react'

import { 
	Header,
	Grid,
	Cell
} from 'react-mdl';


const sectionStyle = {
	width:'100%',
	height:'118px',
	background: 'rgba(255, 255, 255, 0.6)',
	position: 'absolute',
  left: '0px',
  top: '0px',
  zIndex: '200',
}

const CONTAINER_WIDTH = '80%'
const containerStyle = {
  width:CONTAINER_WIDTH,
  maxWidth:'1000px',
  minWidth:'200px',
  margin: 'auto',
}


const gridStyle = {
	width:'100%',
//	height:'118px',
}


const nameStyle = {
	color:'#fff',
	fontSize:'64px',
	textAlign:'center',
	textShadow: '0px 2px 3px rgba(0, 0, 0, 0.1)',
	letterSpacing: '0.15em',
	textTransform: 'uppercase',
}


export default React.createClass({
	render() {
		return (
			<section style={sectionStyle}>
 				<div style={containerStyle} className='debug'>
					<Grid style ={gridStyle} className='debug'>
						<Cell col={2} className='debug'>
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
			</section>				
		)
	}
})