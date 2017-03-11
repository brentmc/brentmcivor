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
const coloursAr = [
  'fbac35',
  '734e7e',
  '4180c7',
  '9ccf27',
  'de5454'
]

const containerStyle = {
  width: '100%'
}

const getImageStyle = (thumbURL) => ({
 height:'281px',
 background: 'url('+thumbURL+') center / cover'
})

const titleStyle = {
  fontSize:'17px', 
  textTransform:'uppercase'
}

const skillsStyle = {
  fontSize:'10px', 
  fontWeight:'300', 
  color:'#999999', 
  lineHeight:'-10px'
}

const captionStyle = {
  lineHeight: '20px',
  marginTop: '20px',
}

const ProjectCard = ({project}) => {
  let thumbURL
  if(project.thumb){
    thumbURL = './images/projects/' + project.thumb + '/' + project.thumb + '_thumb.jpg'
  }else{
    let colour = coloursAr[colourCount % coloursAr.length]
    let thumbLabel = escape(project.title)
    thumbURL = 'https://placeholdit.imgix.net/~text?txtsize=33&bg='+colour+'&txt='+thumbLabel+'&w=500&h=281'
    colourCount++
  }

  let title = project.title
  let caption = title + ' caption Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  let link = project.link ? project.link : '/'
  let skills = ['Entity Component System', 'ActionScript 3', 'JavaScript', 'iOS', 'Android', 'Browser', 'PixiJS', 'Cordova'].join(', ')

  console.log('----------')
  console.log('title:', title)
  console.log('thumbURL:', thumbURL)
  console.log('link:', link)

  return (
    <a href={link}>
      <Card shadow={0} style={containerStyle}>
        <CardTitle style={getImageStyle(thumbURL)}/>
        <CardText>
          <div style={titleStyle}><strong>{title}</strong></div>
          <div style={skillsStyle}>{skills}</div>
          <div style={captionStyle}>{caption}</div>
        </CardText>
        <CardActions>
          <Button colored>More Info</Button>
        </CardActions>
      </Card>
    </a>
  )
}	

export default ProjectCard