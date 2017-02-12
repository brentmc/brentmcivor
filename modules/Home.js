import React from 'react'
import ExampleCard from './ExampleCard' 

const Home = (props) => {
	return (
 	 <div>
 	 		<ExampleCard 
 	 			thumbTitle='Feed Word Monster'
 	 			thumbURL='https://placeholdit.imgix.net/~text?txtsize=33&bg=4180c7&txt=FeedWordMonste32&w=500&h=281'
 	 			caption='Word Monster caption'
 	 			moreInfoURL='http://www.brentmcivor.com'
 	 		/>
 	 		<ExampleCard 
 	 			thumbTitle='Stubmunk Multiple Choice'
 	 			thumbURL='https://placeholdit.imgix.net/~text?txtsize=33&bg=fbac35&txt=StubmunkMC&w=500&h=281'
 	 			caption='Stubmunk Multiple Choice caption'
 	 			moreInfoURL='http://www.brentmcivor.com'
 	 		/>
 	 </div>
  )
}	

export default Home