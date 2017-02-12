import React from 'react'

import { Header } from 'react-mdl';

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

				<nav id="menu" role="navigation">
					<ul className="site-menu">
						<li className="github"><a target="_blank" href="https://github.com/brentmc">GitHub</a></li>
						<li className="linkedin"><a target="_blank" href="http://www.linkedin.com/in/brentmcivor">LinkedIn</a></li>
					</ul>
				</nav>
			</header>    
			</div>
    )
  }
})