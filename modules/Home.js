import React from 'react'
import ProjectCard from './ProjectCard' 

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
			 	<ProjectCard thumbTitle='Feed Word Monster' thumb='feedwordmonster'/>
		 		<ProjectCard thumbTitle='Stubmunk Multiple Choice' thumb='stubmunkmultiplechoice'/>
		 		<ProjectCard thumbTitle='Stubmunk Sentence' thumb='stubmunksentence'/>
			</Grid>
			<Grid>		 		
			 	<ProjectCard thumbTitle='Sight Words App' thumb='sightwordsapp'/>
		 		<ProjectCard thumbTitle='LiteracyPlanet App' thumb='literacyplanetapp'/>
		 		<ProjectCard thumbTitle='Word Mania App' thumb='wordmaniaapp'/>
			</Grid>
			<Grid>		 		
			 	<ProjectCard thumbTitle='Turtle Knock' thumb='turtleknock'/>
		 		<ProjectCard thumbTitle="Penpen's Express" thumb='penpen'/>
		 		<ProjectCard thumbTitle='Sheep Bounce' thumb='sheepbounce'/>
			</Grid>
			<Grid>		 		
			 	<ProjectCard thumbTitle='Block Stack' thumb='blockstack'/>
		 		<ProjectCard thumbTitle='Word Mania Multiplayer' thumb='wordmaniamultiplayer'/>
		 		<ProjectCard thumbTitle='Donkey Dash' thumb='donkeydash'/>
			</Grid>
			<Grid>		 		
			 	<ProjectCard thumbTitle='Treasure Crab'/>
		 		<ProjectCard thumbTitle='Whack A Pirate'/>
		 		<ProjectCard thumbTitle='Breakout Penguin'/>
			</Grid>
			<Grid>		 		
			 	<ProjectCard thumbTitle='Word Mania AU12'/>
		 		<ProjectCard thumbTitle='Word Mania AU13'/>
		 		<ProjectCard thumbTitle='Word Mania MY14'/>
			</Grid>
			<Grid>		 		
			 	<ProjectCard thumbTitle='Word Mania AU15'/>
		 		<ProjectCard thumbTitle='Word Mania AU16'/>
		 		<ProjectCard thumbTitle='Word Mania UK17'/>
			</Grid>
			<Grid>		 	
				<ProjectCard thumbTitle='Quests'/>				 	
		 		<ProjectCard thumbTitle='Shop'/>
		 		<ProjectCard thumbTitle='Prize Wheel' thumb='prizewheel'/>		 		
			</Grid>
			<Grid>		 	
				<ProjectCard thumbTitle='Spelling 01' thumb='spelling01'/>		 	
		 		<ProjectCard thumbTitle='Spelling 02'/>
		 		<ProjectCard thumbTitle='Spelling 03'/>		 		
			</Grid>
			<Grid>		 	
				<ProjectCard thumbTitle='Spelling 04'/>				 	
		 		<ProjectCard thumbTitle='Spelling 05'/>
		 		<ProjectCard thumbTitle='Spelling 06'/>			 		
			</Grid>
			<Grid>		 	
				<ProjectCard thumbTitle='Spelling 07'/>				 	
		 		<ProjectCard thumbTitle='Spelling 08'/>
		 		<ProjectCard thumbTitle='Spelling 09'/>			 		
			</Grid>
			<Grid>		 	
				<ProjectCard thumbTitle='Spelling 10'/>				 	
		 		<ProjectCard thumbTitle='Spelling 11'/>
		 		<ProjectCard thumbTitle='Spelling 12'/>			 		
			</Grid>
			<Grid>		 	
				<ProjectCard thumbTitle='Spelling 13'/>				 	
		 		<ProjectCard thumbTitle='Spelling 14'/>
		 		<ProjectCard thumbTitle='Compre ICE'/>			 		
			</Grid>
			<Grid>		 	
				<ProjectCard thumbTitle='Books' thumb='books'/>
			</Grid>
 	 </div>
  )
}	

export default Home