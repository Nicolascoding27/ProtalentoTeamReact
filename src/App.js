import React, {Component} from 'react';
import {robots} from './people'
import Cardlist from './CardList'
import SearchBox from './Searchbox.js'
import './App.css'
// import { Component } from 'react'; se pasa arriba
//STATE >> props //state means the description of the app, is an objec that describe 
//the app
//we are able to change states, props are things thatg come out from state
//START TO USING STATE

class App extends  Component{
    constructor(){
        super()//calls the constructor of component
        this.state={
                robots:robots,//in this case robots dont change, but when we're getting info from the internet we need to change it.
                searchfield:'' //right now it's an empty string
        }
    }
    onSearchChange= (event)=> { //name of a function ON SEARCHCHANE
        this.setState({searchfield:event.target.value})    //method to change state 
    }
    render(){
        const filteredRobots=this.state.robots.filter(robots=>{
         return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })//it does the comparison between what the user types and what is in the array, always to lowercase so we dont have problems with the input
        return(
            <div class="tc">
            <h1>Protalento team</h1>
            <SearchBox searchChange={this.onSearchChange}/>
            {/* Now we can add filteredRobots as a prop because is inside the render function 
             */}
            <Cardlist robots={filteredRobots} /> 
            </div>
        )  
    }
    

}
export default App;