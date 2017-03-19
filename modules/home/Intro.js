import React from 'react'
import { 
	Header,
	Grid,
	Cell
} from 'react-mdl';

const introContainerStyle = {
	paddingTop:'30px',
	//paddingBottom:'15px',
}

const introTextStyle = {
	margin: 'auto',
  textAlign:'center',
  marginTop:'30px',
	marginBottom: '20px',
	fontSize:'40px',
	lineHeight:'42px',
	color:"#3b3b3b",
	fontFamily:"'Acumin Pro', 'Arial"
}

const dividerStyle = {
	marginTop: '20px',
	marginBottom: '20px',
	borderTop: '1px solid rgba(0, 0, 0, 0.1)',
	borderBottom: '1px solid rgba(255, 255, 255, 1)',
}

const socialBtnStyle = {
	width:'20px',
	height:'20px',
}

const SocialBtn = ({link, img, alt}) => {
	return (
		<Cell col={6} tablet={4} phone={2}>
			<a target="_blank" href={link} style={socialBtnStyle}>
	    	<img src={img} alt={alt}/>
	    </a>
	  </Cell>
	)
}

export default React.createClass({
	render() {
		return (
			<div>
				<div className='container' style={introContainerStyle}>
					<div style={introTextStyle}><i>My name is Brent.</i></div>
					<div style={introTextStyle}><i>I make educational games for children.</i></div>
				</div>
				

				<div style={{width: '130px', margin: 'auto'}}>
					<Grid>
						<SocialBtn 
				   		link='https://github.com/brentmc' 
				   		img='./images/social/github.png' 
				   		alt='GitHub'
				   	/>
				   	<SocialBtn 
				   		link='http://www.linkedin.com/in/brentmcivor' 
				   		img='./images/social/linkedin.png' 
				   		alt='LinkedIn'
				   	/>
					</Grid>	   
				</div>

				<hr width='100%' style={dividerStyle}/>

			</div>
		)
	}
})