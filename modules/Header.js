import React from 'react'
import { 
	Header,
	Grid,
	Cell
} from 'react-mdl';

const bannerStyle = {
	width:'100%',
	height:'30px',
	backgroundColor: '#2196f3'
}

const brandingStyle = {
	margin: 'auto',
  textAlign:'center',
  marginTop:'30px',
	marginBottom: '30px'
}

const nameStyle = {
	paddingBottom: '0px',
	margin: '0px',
	textShadow: '0px 2px 3px rgba(0, 0, 0, 0.1)',
	letterSpacing: '0.15em',
	textTransform: 'uppercase',
	color:'#4b4d51',
}

const roleStyle = {
	paddingBottom: '-150px',
	margin: '-10px',
	textShadow: '0px 1px 1px rgba(0, 0, 0, 0.2)',
	fontSize: '22px',
	letterSpacing: '0.25em',
	textTransform: 'uppercase',
	color:'#4b4d51',
}

const dividerStyle = {
	marginTop: '20px',
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
				<div style={bannerStyle}/>

				<header style={brandingStyle}>	   	
					<section>					
						<h1 style={nameStyle}>
							<a href='/'>
								<strong>Brent McIvor</strong>
							</a>
						</h1>		

						<h3 style={roleStyle}>
							<a href='/'>
								Educational Game Developer
							</a>
						</h3>
					</section>

					<hr width='100%' style={dividerStyle}/>

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
				</header>    
			</div>
		)
	}
})