import React from 'react'

import { Button, Icon, CardText, Card, CardTitle, CardActions, CardMenu, IconButton} from 'react-mdl';

const FeedWordMonster = (props) => {
  return (
  	/*<div>	
  		<img class="thumbnail-preview" src="https://placeholdit.imgix.net/~text?txtsize=33&bg=4180c7&txt=FeedWordMonster&w=500&h=281" alt="Feed Word Monster"/>
  		<div class="thumbnail-caption">This is the caption for Feed Word Monster</div>  		
			<Button raised ripple class="thumbnail-caption">
				<a href="http://brentmcivor.com">
					More Info
				</a>
			</Button>
  	</div>*/

  	<Card shadow={0} style={{width: '512px', margin: 'auto'}}>
    <CardTitle style={{color: '#fff', height: '281px', background: 'url(https://placeholdit.imgix.net/~text?txtsize=33&bg=4180c7&txt=FeedWordMonster&w=500&h=281) center / cover'}}>Feed Word Monster</CardTitle>
    <CardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Mauris sagittis pellentesque lacus eleifend lacinia...
    </CardText>
    <CardActions border>
        <Button colored>More Info</Button>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
    </CardMenu>
</Card>
  )
}	

export default FeedWordMonster