import React from 'react'

export default React.createClass({
  render() {
    return <div>
    	<section className='project-titleSection'
    		style={{
    			background:this.props.bgColour
    		}}
    	>
    		<h1 className='project-title center'>{this.props.title}</h1>
    	</section>
    	<section className='project-videoSection'>
	    	<iframe className='project-video center'
	    		src={this.props.videoURL}
	    		frameborder="0" allowfullscreen
	    		
	   			>
	   		</iframe>
   		</section>
    	{this.props.children}
     </div>
  }
})