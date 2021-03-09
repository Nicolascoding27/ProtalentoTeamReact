import React, {Component} from 'react';
import {robots} from './people'
import Cardlist from './CardList'
import SearchBox from './Searchbox.js'
// import { Component } from 'react'; se pasa arriba
//STATE >> props //state means the description of the app, is an objec that describe 
//the app
//we are able to change states, props are things thatg come out from state
//START TO USING STATE

class App extends  Component{
    constructor(){
        super()//calls the constructor of component
        this.state={
                robots:robots,
                searchfield:''
        }
    }
    render(){
        return(
            <div class="tc">
            <h1>RoboFriends</h1>
            <SearchBox/>
            <Cardlist robots={this.state.robots} />
            </div>
        ) 
    }
    

}
export default App;