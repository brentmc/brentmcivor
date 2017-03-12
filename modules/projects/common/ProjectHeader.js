import React from 'react'

import { 
	Header,
	Grid,
	Cell
} from 'react-mdl';


const sectionStyle = {
	width:'100%',
	minHeight:'118px',
	//background: 'rgba(51, 51, 51, 0.6)', 			//#333333
	background: 'rgba(204, 204, 204, 0.6)',			//#cccccc
	//background: 'rgba(255, 255, 255, 0.6)',	//white
	//background: 'rgba(0, 255, 24, 0.8)',			//debug green
	position: 'absolute',
  left: '0px',
  top: '0px',
  zIndex: '200',

//  borderColor: 'blue',
//	borderStyle: 'dashed',
}

//const gridStyle = {
	//width:'100%',
//	height:'118px',
//	borderColor: 'green',
//	borderStyle: 'dotted',
//}

const logoStyle = {
	marginTop: '15px'
}

const nameStyle = {
	color:'#fff',
	fontSize:'64px',
	textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)',
	//letterSpacing: '0.15em',
	textTransform: 'uppercase',	
	textAlign: 'center',
	//position:'absolute',
	//top: '25px',
	marginTop:'-70px',
	lineHeight:'65px',

	//borderColor: 'green',
	//borderStyle: 'dotted',
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
 				<div className='container'>
					<img src='/images/bm_logo.png' style={logoStyle}/>
					<p style={nameStyle} >
						<strong>Brent McIvor</strong>
					</p>   
				</div>	
			</section>				
		)
	}
})