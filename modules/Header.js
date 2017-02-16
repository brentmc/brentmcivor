import React from 'react'

import NavLink from './NavLink'

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
				<ul role="nav">
        	<li><NavLink to="/" onlyActiveOnIndex={true}>Home</NavLink></li>
          <li><NavLink to="/feedwordmonster" activeClassName="active">Feed Word Monster</NavLink></li>
					<li><NavLink to="/stubmunksentence" activeClassName="active">Stubmunk Sentence</NavLink></li>
        </ul>
    	</Header>


	   	<header className="branding center">	   	
				<section>					
					<h1 className="branding-name">
						<a href='/'>
							<strong>Brent McIvor</strong>
						</a>
					</h1>		

					<h3 className='branding-role'>
						<a href='/'>
							Games and Content Developer
						</a>
					</h3>
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