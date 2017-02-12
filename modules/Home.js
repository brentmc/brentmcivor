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
			 	<ExampleCard thumbTitle='Feed Word Monster' thumb='feedwordmonster'/>
		 		<ExampleCard thumbTitle='Stubmunk Multiple Choice' thumb='stubmunkmultiplechoice'/>
		 		<ExampleCard thumbTitle='Stubmunk Sentence' thumb='stubmunksentence'/>
			</Grid>
			<Grid>		 		
			 	<ExampleCard thumbTitle='Sight Words App' thumb='sightwordsapp'/>
		 		<ExampleCard thumbTitle='LiteracyPlanet App' thumb='literacyplanetapp'/>
		 		<ExampleCard thumbTitle='Word Mania App' thumb='wordmaniaapp'/>
			</Grid>
			<Grid>		 		
			 	<ExampleCard thumbTitle='Turtle Knock' thumb='turtleknock'/>
		 		<ExampleCard thumbTitle="Penpen's Express" thumb='penpen'/>
		 		<ExampleCard thumbTitle='Sheep Bounce' thumb='sheepbounce'/>
			</Grid>
			<Grid>		 		
			 	<ExampleCard thumbTitle='Block Stack' thumb='blockstack'/>
		 		<ExampleCard thumbTitle='Word Mania Multiplayer' thumb='wordmaniamultiplayer'/>
		 		<ExampleCard thumbTitle='Donkey Dash' thumb='donkeydash'/>
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
		 		<ExampleCard thumbTitle='Prize Wheel' thumb='prizewheel'/>		 		
			</Grid>
			<Grid>		 	
				<ExampleCard thumbTitle='Spelling 01' thumb='spelling01'/>		 	
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
				<ExampleCard thumbTitle='Books' thumb='books'/>
			</Grid>
 	 </div>
  )
}	

export default Home