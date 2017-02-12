import React from 'react'
import ExamplesHeader from './ExamplesHeader' 
import ExampleCard from './games/ExampleCard' 
import StubmunkMC from './games/StubmunkMC' 

const Home = (props) => {
	return (
 	 <div>
 	 		<ExamplesHeader/>
 	 		<ExampleCard/>
 	 		<StubmunkMC/>
 	 </div>
  )
}	

export default Home