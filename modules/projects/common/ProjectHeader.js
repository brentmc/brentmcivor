import React from 'react'

import { 
	Header,
	Grid,
	Cell
} from 'react-mdl';


const sectionStyle = {
	width:'100%',
	height:'118px',
	//background: 'rgba(255, 255, 255, 0.6)',
	background: 'rgba(0, 255, 24, 0.8)',
	position: 'absolute',
  left: '0px',
  top: '0px',
  zIndex: '200',

  borderColor: 'blue',
	borderStyle: 'dashed',
}

const gridStyle = {
	//width:'100%',
//	height:'118px',

	borderColor: 'green',
	borderStyle: 'dotted',
}

const logoStyle = {
	//float:'clear'
	marginTop: '15px'
}


const nameStyle = {
	color:'#fff',
	fontSize:'64px',
	//textAlign:'center',
	//textShadow: '0px 2px 3px rgba(0, 0, 0, 0.1)',
	//letterSpacing: '0.15em',
	//textTransform: 'uppercase',
	borderColor: 'green',
	borderStyle: 'dotted',
	textAlign: 'center',
//	position:'absolute',
	//top: '25px',
	marginTop:'-70px',
	lineHeight:'65px',



}

/*
<Grid style ={gridStyle}>

						<Cell col={2} className='debug'>
							<img src='/images/bm_logo.png'/>
						</Cell>

						<Cell className='debug'>
							<p style={nameStyle}>

									<strong>Brent McIvor</strong>

							</p>   
						</Cell>

					</Grid>			*/


export default React.createClass({
	render() {
		return (
			<section style={sectionStyle}>
 			
 				<div className='debug container'>

							<img src='/images/bm_logo.png' style={logoStyle} className='debug'/>



							<p style={nameStyle} >
								<strong>Brent McIvor</strong>

							</p>   

				</div>	
			</section>				
		)
	}
})