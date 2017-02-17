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
		<ProjectCard key={thumb} thumbTitle={thumbTitle} thumb={thumb}/>
	)
}

const Home = (props) => {
	return (
		<div >
			<Grid style={{width: '100%', margin: 'auto'}}>
				{projectsAr.map(project => { 
					return createProjectCard(project.thumbTitle, project.thumb)
				})}
			</Grid>
		</div>
	);
}	

export default Home