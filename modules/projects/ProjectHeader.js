import React from 'react'

import { 
	Header,
	Grid,
	Cell
} from 'react-mdl';

const bannerStyle = {
	width:'100%',
	height:'64px',
	'backgroundColor': '#2196f3'
}

const nameStyle = {
//	margin:'5px'
}


export default React.createClass({
	render() {
		return (

				<div style={bannerStyle}>

					<header className='' style={nameStyle}>	   	
						<p>
							<a href='/'>
								<strong>Brent McIvor</strong>
							</a>
						</p>		
					</header>   
				</div> 				

		)
	}
})