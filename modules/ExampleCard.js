import React from 'react'

import { Button, Icon, CardText, Card, CardTitle, CardActions, CardMenu, IconButton} from 'react-mdl';

const ExampleCard = (props) => {
  return (
  	<Card shadow={0} style={{width: '512px', margin: 'auto'}}>
      <CardTitle style={{color: '#fff', height: '281px', background: 'url('+props.thumbURL+') center / cover'}}>{props.thumbTitle}</CardTitle>
      <CardText>{props.caption}</CardText>
      <CardActions border>
          <Button colored><a href={props.moreInfoURL}>More Info</a></Button>
      </CardActions>
      <CardMenu style={{color: '#fff'}}>
          <IconButton name="share" />
      </CardMenu>
    </Card>
  )
}	

export default ExampleCard