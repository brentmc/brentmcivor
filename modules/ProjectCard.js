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

const ProjectCard = ({project}) => {
  let thumbURL
  if(project.thumb){
    thumbURL = './images/' + project.thumb + '/' + project.thumb + '_thumb.jpeg'
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
      <Card className='projectCard' shadow={0} style={{width: '100%'}}>
        <CardTitle className='projectCard-image projectCard-title' style={{color: '#fff', height:'281px', background: 'url('+thumbURL+') center / cover'}}/>
        <CardText>
          <div className='projectCard-title' style={{'font-size':'17px', 'text-transform':'uppercase'}}><strong>{title}</strong></div>
          <div className='projectCard-skills' style={{'font-size':'10px', 'font-weight':'300', 'color':'#999999', 'line-height':'-10px'}}>{skills}</div>
          <div className='projectCard-caption'>{caption}</div>
        </CardText>
        <CardActions>
          <Button colored>More Info</Button>
        </CardActions>
      </Card>
    </a>
  )
}	

export default ProjectCard