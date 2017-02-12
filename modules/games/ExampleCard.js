import React from 'react'

import { Button, Icon, CardText, Card, CardTitle, CardActions, CardMenu, IconButton} from 'react-mdl';

const ExampleCard = (props) => {
  let thumbTitle = props.thumbURL ? props.thumbURL : 'Feed Word Monster Title'
  let thumbURL = props.thumbURL ? props.thumbURL : 'https://placeholdit.imgix.net/~text?txtsize=33&bg=4180c7&txt=FeedWordMonste32&w=500&h=281'
  let caption = props.caption ? props.caption : 'Placeholder caption text...'
  let moreInfoURL = 'http://www.brentmcivor.com'

  return (

  	<Card shadow={0} style={{width: '512px', margin: 'auto'}}>
    <CardTitle style={{color: '#fff', height: '281px', background: 'url('+thumbURL+') center / cover'}}>{thumbTitle}</CardTitle>
    <CardText>{caption}</CardText>
    <CardActions border>
        <Button colored><a href={moreInfoURL}>More Info</a></Button>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
    </CardMenu>
</Card>
  )
}	

export default ExampleCard