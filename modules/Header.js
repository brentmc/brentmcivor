import React from 'react'

import { 
	Header,
	Grid,
	Cell
} from 'react-mdl';

export default React.createClass({
  render() {
    return (
    	<div>
    	<Header waterfall>

    	</Header>



	   	<header className="branding center">

				<section>
					<h1 className="branding-name">
						<strong>Brent McIvor</strong>
					</h1>
				

				<h3 className='branding-role'>Games and Content Developer</h3>
				</section>

				<hr width='100%' className="branding-divider center"/>

				<div style={{width: '130px', margin: 'auto'}}>
				    <Grid className="demo-grid-ruler">
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
			</header>    
			</div>
    )
  }
})