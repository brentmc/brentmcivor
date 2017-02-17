import React from 'react'

import { 
  Button,
  Icon, 
  CardText, 
  Card,
  CardTitle,
  CardActions,
  CardMenu,
  IconButton,
  Cell,
  Tile
} from 'react-mdl';

let colourCount = 0
let coloursAr = [
  'fbac35',
  '734e7e',
  '4180c7',
  '9ccf27',
  'de5454'
]

const ProjectCard = (props) => {
  
  let thumbURL
  if(props.thumb){
    thumbURL = './images/thumbs/' + props.thumb + '.jpeg'
  }else{
    let colour = coloursAr[colourCount % coloursAr.length]
    let thumbLabel = escape(props.thumbTitle)
    thumbURL = 'https://placeholdit.imgix.net/~text?txtsize=33&bg='+colour+'&txt='+thumbLabel+'&w=500&h=281'
    colourCount++
  }

  //console.log(thumbURL)

  let caption = props.thumbTitle + ' caption Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  let link = props.link ? props.link : '/'

  return (
    <a href={link} >

      	<Card className='projectCard' shadow={0} style={{width: '100%'}} >
          <CardTitle className='projectCard-image projectCard-title' style={{color: '#fff', height:'281px', background: 'url('+thumbURL+') center / cover'}}>{props.thumbTitle}</CardTitle>
          <CardText className='projectCard-caption'>{caption}</CardText>
          <CardActions border>
              <Button colored>More Info</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
          </CardMenu>
        </Card>

    </a>
  )
}	

export default ProjectCard