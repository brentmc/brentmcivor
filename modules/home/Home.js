import React from 'react'

import Header from '../Header' 

import Intro from './Intro'
import ProjectCard from './ProjectCard' 
import {projectsAr} from './projectsData'

import { 
	Footer,
	FooterSection,
	FooterLinkList,
	Grid,
	Cell
} from 'react-mdl';

//I want this page wider than each project page
const homeContainerStyle = {
	width:'100%',
  maxWidth:'1500px',
  minWidth:'200px',
  margin: 'auto'
}

const Home = (props) => {
	return (
		<div>			
			<Intro/>
			<div style={homeContainerStyle}>
				<Grid>
					{projectsAr.map(project => {
						return (
							<Cell key={project.title} col={4} tablet={4} phone={4}>
								<ProjectCard key={project.thumb} project={project}/>
							</Cell>
							)
					})}
				</Grid>		
			</div>	
		</div>
	);
}	

export default Home