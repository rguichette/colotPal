import React from 'react';
import Palette from "./Palette"
import seedColors from "./seedcolors"
import {generatePalette} from './colorhelpers'

function App() {
  console.log(generatePalette(seedColors[4]));
  
  return (
    <div className="App" >
<Palette palette={generatePalette(seedColors[4])}/>
    </div>
  );
}

export default App;
