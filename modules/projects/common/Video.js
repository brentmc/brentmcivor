import React from 'react'

const videoWrapper = {
  position: 'relative',
  paddingBottom: '56.25%', /* 16:9 */
  paddingTop: '25px',
  height: '0',
}

const vidStyle = {
  position: 'absolute',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
}

export const Vid = ({videoURL}) => {

	console.log('Vid', videoURL)
	return (
		<div>
			<iframe style={vidStyle} 
	    	width="560" 
	      height="349" 
	      src={videoURL}
	      frameBorder="0" 
	      allowFullScreen
	    />
    </div>
  )
}

export const Thumbnail = ({thumbnailURL, onThumbnailClick}) => {
	return (
		<div>
			<div className="play-button"></div>      
		  <img className='thumbnail' style={vidStyle}
		  	src={thumbnailURL}
		  	width="560" 
	      height="349" 
		    onClick={e => {
		    	console.log('Thumbnail onClick', thumbnailURL)
		    	onThumbnailClick()
		    }}
		  />
		</div>
	)
}



class Video extends React.Component {
  constructor(props) {
    super(props)

    this.onThumbnailClick = this.thumbnailClick.bind(this);

    this.state = {
    	videoID:props.videoID,
    	showVideo:false
    }
    console.log('this.state.videoID', this.state.videoID)
  }	

  thumbnailClick() {
  	console.log('thumbnailClick()')
  	this.setState({showVideo:true})
  }

  /**
   * Lazy loading the video. I'll show the thumbnail image first. Then only 
   * if the user clicks play will I show the video itself
   * https://webdesign.tutsplus.com/tutorials/how-to-lazy-load-embedded-youtube-videos--cms-26743
   */	
	render () {
		const videoURL = 'https://www.youtube.com/embed/' + this.state.videoID
		const thumbnailURL = 'http://img.youtube.com/vi/' + this.state.videoID + '/maxresdefault.jpg'
		//const thumbnailURL = 'http://img.youtube.com/vi/' + this.state.videoID + '/hqdefault.jpg'

		return (
			<div style={videoWrapper}> 

				{this.state.showVideo ? (
					<Vid videoURL={videoURL}/>
				) : ( 
					<Thumbnail 
						thumbnailURL={thumbnailURL}
						onThumbnailClick={this.onThumbnailClick}
						
					/>
				)}

			</div>
		)
	}
}

export default Video