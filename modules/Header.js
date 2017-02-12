import React from 'react'

export default React.createClass({
  render() {
    return (
	   	<header id="site-header" role="banner" class="text-center">
				<section id="branding">
					<h1>
						<a href="http://www.brentmcivor.com/"><strong >Brent McIvor</strong></a>
					</h1>
				</section>
				<h2>
					<a href="http://www.brentmcivor.com" title="Brent McIvor" rel="home">Game Developer</a>
				</h2>

				<nav id="menu" role="navigation">
					<ul class="site-menu">
						<li class="github"><a target="_blank" href="https://github.com/brentmc">GitHub</a></li>
						<li class="linkedin"><a target="_blank" href="www.linkedin.com/in/brentmcivor">LinkedIn</a></li>
					</ul>
				</nav>
			</header>    
    )
  }
})