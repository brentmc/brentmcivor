import React from 'react'
import ExampleCard from './ExampleCard' 

import { 
	Footer,
	FooterSection,
	FooterLinkList,
	Grid,
	Cell
} from 'react-mdl';

const Home = (props) => {
	return (
		<div style={{width: '100%', margin: 'auto'}}>
    	<Grid>		 		
			 	<ExampleCard thumbTitle='Feed Word Monster'/>
		 		<ExampleCard thumbTitle='Stubmunk Multiple Choice'/>
		 		<ExampleCard thumbTitle='Stubmunk Sentence'/>
			</Grid>
			<Grid>		 		
			 	<ExampleCard thumbTitle='Sight Words App'/>
		 		<ExampleCard thumbTitle='LiteracyPlanet App'/>
		 		<ExampleCard thumbTitle='Word Mania App'/>
			</Grid>
			<Grid>		 		
			 	<ExampleCard thumbTitle='Turtle Knock'/>
		 		<ExampleCard thumbTitle="Penpen's Express"/>
		 		<ExampleCard thumbTitle='Sheep Bounce'/>
			</Grid>
			<Grid>		 		
			 	<ExampleCard thumbTitle='Block Stack'/>
		 		<ExampleCard thumbTitle='Word Mania Multiplayer'/>
		 		<ExampleCard thumbTitle='Donkey Dash'/>
			</Grid>
			<Grid>		 		
			 	<ExampleCard thumbTitle='Treasure Crab'/>
		 		<ExampleCard thumbTitle='Whack A Pirate'/>
		 		<ExampleCard thumbTitle='Breakout Penguin'/>
			</Grid>
			<Grid>		 		
			 	<ExampleCard thumbTitle='Word Mania AU12'/>
		 		<ExampleCard thumbTitle='Word Mania AU13'/>
		 		<ExampleCard thumbTitle='Word Mania MY14'/>
			</Grid>
			<Grid>		 		
			 	<ExampleCard thumbTitle='Word Mania AU15'/>
		 		<ExampleCard thumbTitle='Word Mania AU16'/>
		 		<ExampleCard thumbTitle='Word Mania UK17'/>
			</Grid>
			<Grid>		 	
				<ExampleCard thumbTitle='Quests'/>				 	
		 		<ExampleCard thumbTitle='Shop'/>
		 		<ExampleCard thumbTitle='Prize Wheel'/>		 		
			</Grid>
			<Grid>		 	
				<ExampleCard thumbTitle='Spelling 01'/>				 	
		 		<ExampleCard thumbTitle='Spelling 02'/>
		 		<ExampleCard thumbTitle='Spelling 03'/>		 		
			</Grid>
			<Grid>		 	
				<ExampleCard thumbTitle='Spelling 04'/>				 	
		 		<ExampleCard thumbTitle='Spelling 05'/>
		 		<ExampleCard thumbTitle='Spelling 06'/>			 		
			</Grid>
			<Grid>		 	
				<ExampleCard thumbTitle='Spelling 07'/>				 	
		 		<ExampleCard thumbTitle='Spelling 08'/>
		 		<ExampleCard thumbTitle='Spelling 09'/>			 		
			</Grid>
			<Grid>		 	
				<ExampleCard thumbTitle='Spelling 10'/>				 	
		 		<ExampleCard thumbTitle='Spelling 11'/>
		 		<ExampleCard thumbTitle='Spelling 12'/>			 		
			</Grid>
			<Grid>		 	
				<ExampleCard thumbTitle='Spelling 13'/>				 	
		 		<ExampleCard thumbTitle='Spelling 14'/>
		 		<ExampleCard thumbTitle='Compre ICE'/>			 		
			</Grid>
			<Grid>		 	
				<ExampleCard thumbTitle='Books'/>				 	
		 		<ExampleCard thumbTitle='Spelling 02'/>
		 		<ExampleCard thumbTitle='Spelling 03'/>			 		
			</Grid>
 	 </div>
  )
}	

export default Home