import React from 'react'
import ProjectCard from './ProjectCard' 

import {projectsAr} from './home/projectsData'

import { 
	Footer,
	FooterSection,
	FooterLinkList,
	Grid,
	Cell
} from 'react-mdl';

const createProjectCard = (thumbTitle, thumb) => {
	return (
		<ProjectCard className='debug' key={thumb} thumbTitle={thumbTitle} thumb={thumb}/>
	)
}

const Home = (props) => {
	return (
		<div className='debug' >
			<Grid  >
			{projectsAr.map(project => {
				return (
					<Cell key={project.title} className='debug' col={4} tablet={12} phone={12}>
						<ProjectCard className='debug' key={project.thumb} thumbTitle={project.thumbTitle} thumb={project.thumb}/>
					</Cell>
				)
			})}
			</Grid>	

 
		</div>
	);
}	

export default Home