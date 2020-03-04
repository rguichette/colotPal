import React from 'react';
import Palette from "./Palette"
import seedColors from "./seedcolors"
import {generatePalette} from './colorhelpers'

import {Route, Switch} from 'react-router-dom'
import { Component } from 'react';

class App extends Component {

  findPalette(id){
return seedColors.find(function(palette){
  return palette.id === id;
})
  }
  // console.log(generatePalette(seedColors[4]));
  render(){
  return (
    <Switch>
    <Route exact path="/" render={()=>{
     return  <h1>Hello</h1>
    }}/>
      <Route exact path="/palette/:id" render={(routeProps)=>{
     return  <Palette palette={generatePalette(this.findPalette(routeProps.match.params.id))}/>}
      }/>

      </Switch>

  )
    }
  }
  

export default App;
