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
		<div>
			<Header/>
			<div style ={{width:'100%', margin:'auto'}}>
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