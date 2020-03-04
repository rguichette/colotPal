import React from 'react';
import Palette from "./Palette"
import seedColors from "./seedcolors"
import {generatePalette} from './colorhelpers'

import {Route, Switch} from 'react-router-dom'

function App() {
  console.log(generatePalette(seedColors[4]));
  
  return (
    <Switch>
    <Route exact path="/" render={()=>{
     return  <h1>Hello</h1>
    }}/>
      <Route exact path="/palette/:id" render={()=>{
     return  <h1>indi palette</h1>
    }}/>
      </Switch>
//     <div className="App" >
// <Palette palette={generatePalette(seedColors[4])}/>
//     </div>
    
  );
}

export default App;
