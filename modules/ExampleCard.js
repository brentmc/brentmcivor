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
  Cell
} from 'react-mdl';

let instanceCount = 0
let coloursAr = [
  'fbac35',
  '734e7e',
  '4180c7',
  '9ccf27',
  'de5454'
]

const ExampleCard = (props) => {
  instanceCount++


  let colour = coloursAr[instanceCount % coloursAr.length]
  let thumbLabel = escape(props.thumbTitle)
  let thumbURL = 'https://placeholdit.imgix.net/~text?txtsize=33&bg='+colour+'&txt='+thumbLabel+'&w=500&h=281'
  let caption = props.thumbTitle + ' caption Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  let moreInfoURL = 'http://www.brentmcivor.com'

  return (
    <Cell col={4} tablet={12} phone={12}>
    	<Card shadow={0} style={{width: '512px', margin: 'auto'}}>
        <CardTitle style={{color: '#fff', height: '281px', background: 'url('+thumbURL+') center / cover'}}>{props.thumbTitle}</CardTitle>
        <CardText>{caption}</CardText>
        <CardActions border>
            <Button colored><a href={moreInfoURL}>More Info</a></Button>
        </CardActions>
        <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
        </CardMenu>
      </Card>
    </Cell>
  )
}	

export default ExampleCard