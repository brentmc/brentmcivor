import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import App from './modules/App'
import Home from './modules/Home'

//Projects
import AlphabeticalWordMonster from './modules/projects/alphabeticalwordmonster/AlphabeticalWordMonster'
import BlockStack from './modules/projects/blockstack/BlockStack'
import BreakoutPenguin from './modules/projects/breakoutpenguin/BreakoutPenguin'
import Dictation from './modules/projects/dictation/Dictation'
import DonkeyDash from './modules/projects/donkeydash/DonkeyDash'
import FeedWordMonster from './modules/projects/feedwordmonster/FeedWordMonster'
import FlashCard from './modules/projects/flashcard/FlashCard'
import FloatingWords from './modules/projects/floatingwords/FloatingWords'
import Jigsaw from './modules/projects/jigsaw/Jigsaw'
import MemoryGame from './modules/projects/memorygame/MemoryGame'
import Penpen from './modules/projects/penpen/Penpen'
import Prizewheel from './modules/projects/prizewheel/Prizewheel'
import SentenceJumble from './modules/projects/sentencejumble/SentenceJumble'
import SheepBounce from './modules/projects/sheepbounce/SheepBounce'
import SightWordsApp from './modules/projects/sightwordsapp/SightWordsApp'
import Snap from './modules/projects/snap/snap'
import SpellThisWord from './modules/projects/spellthisword/SpellThisWord'
import StaticWords from './modules/projects/staticwords/StaticWords'
import StubmunkMultipleChoice from './modules/projects/stubmunkmultiplechoice/StubmunkMultipleChoice'
import StubmunkSentence from './modules/projects/stubmunksentence/StubmunkSentence'
import TreasureCrab from './modules/projects/treasurecrab/TreasureCrab'
import TurtleKnock from './modules/projects/turtleknock/TurtleKnock'
import WhackAPirate from './modules/projects/whackapirate/WhackAPirate'
import WMAU13 from './modules/projects/wmau13/WMAU13'
import WMAU16 from './modules/projects/wmau16/WMAU16'
import WordBuilder1 from './modules/projects/wordbuilder1/WordBuilder1'
import WordBuilder2 from './modules/projects/wordbuilder2/WordBuilder2'
import WordFinder from './modules/projects/wordfinder/WordFinder'
import WordManiaMulti from './modules/projects/wordmaniamulti/WordManiaMulti'
import WordOrder from './modules/projects/wordorder/WordOrder'



//import 'react-mdl/extra/material.css'; //Now using Google's MDL because I don't want to use React Layout for now
import 'react-mdl/extra/material.js';

render((
  <Router history={browserHistory}>
  	<Route path="/" component={App}>
    	<IndexRoute component={Home}/>

     	<Route path="/alphabeticalwordmonster" component={AlphabeticalWordMonster}/>
     	<Route path="/blockstack" component={BlockStack}/>
     	<Route path="/breakoutpenguin" component={BreakoutPenguin}/>
     	<Route path="/dictation" component={Dictation}/>
     	<Route path="/donkeydash" component={DonkeyDash}/>     
     	<Route path="/feedwordmonster" component={FeedWordMonster}/>
     	<Route path="/flashcard" component={FlashCard}/>
     	<Route path="/floatingwords" component={FloatingWords}/>
     	<Route path="/jigsaw" component={Jigsaw}/>
     	<Route path="/memorygame" component={MemoryGame}/>
     	<Route path="/penpen" component={Penpen}/>
     	<Route path="/prizewheel" component={Prizewheel}/>
     	<Route path="/sentencejumble" component={SentenceJumble}/>
     	<Route path="/sheepbounce" component={SheepBounce}/>
     	<Route path="/sightwordsapp" component={SightWordsApp}/>
     	<Route path="/snap" component={Snap}/>
     	<Route path="/spellthisword" component={SpellThisWord}/>
     	<Route path="/staticwords" component={StaticWords}/>
     	<Route path="/stubmunkmultiplechoice" component={StubmunkMultipleChoice}/>
     	<Route path="/stubmunksentence" component={StubmunkSentence}/>
     	<Route path="/treasurecrab" component={TreasureCrab}/>
        <Route path="/turtleknock" component={TurtleKnock}/>
     	<Route path="/whackapirate" component={WhackAPirate}/>
     	<Route path="/wmau13" component={WMAU13}/>
     	<Route path="/wmau16" component={WMAU16}/>
     	<Route path="/wordbuilder1" component={WordBuilder1}/>
     	<Route path="/wordbuilder2" component={WordBuilder2}/>
     	<Route path="/wordfinder" component={WordFinder}/>
     	<Route path="/wordmaniamulti" component={WordManiaMulti}/>
     	<Route path="/wordorder" component={WordOrder}/>

   	</Route>
  </Router>
), document.getElementById('app'))