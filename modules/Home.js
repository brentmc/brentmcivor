import React from 'react'
import ProjectCard from './ProjectCard' 
import Header from './Header' 

import {projectsAr} from './home/projectsData'

import { 
	Footer,
	FooterSection,
	FooterLinkList,
	Grid,
	Cell
} from 'react-mdl';


const Home = (props) => {
	return (
		<div style ={{width:'100%', margin:'auto'}} className=''>
			<Grid className=''>
				{projectsAr.map(project => {
					return (
						<Cell className='' key={project.title} col={4} tablet={4} phone={4}>
							<ProjectCard key={project.thumb} thumbTitle={project.thumbTitle} thumb={project.thumb}/>
						</Cell>
						)
				})}
			</Grid>		
		</div>	
	);
}	

export default Home