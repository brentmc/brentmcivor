import React from 'react'

import { 
	Footer,
	FooterSection,
	FooterLinkList,
	Grid,
	Cell
} from 'react-mdl';

export default React.createClass({
  render() {
    return (
      <Footer className="center" size="mega">
      	<FooterSection type="middle">
	      	<div style={{width: '130px', margin: 'auto'}}>
				    <Grid>
				        <Cell col={6}>
				        	<a target="_blank" href="https://github.com/brentmc" className='socialBtn socialBtn-github'>
	            			<img src='./images/social/github.png' alt='GitHub'/>
	            		</a>
	            	</Cell>
				        <Cell col={6}>
				        	<a target="_blank" href="http://www.linkedin.com/in/brentmcivor" className='socialBtn socialBtn-linkedIn'>
	            			<img src='./images/social/linkedin.png' alt='LinkedIn'/>
	            		</a>
	            	</Cell>
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