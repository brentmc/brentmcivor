import React from 'react'

import { 
	Footer,
	FooterSection,
	FooterLinkList,
	Grid,
	Cell
} from 'react-mdl';

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
      <Footer className="center" size="mega">
      	<FooterSection type="middle">
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
      	</FooterSection>
      	<FooterSection type="bottom">
	      	<p>© Copyright {new Date().getFullYear()} Brent McIvor</p>
      	</FooterSection>
        
      </Footer>
    )
  }
})