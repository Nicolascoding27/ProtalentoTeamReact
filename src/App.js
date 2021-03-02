import React from 'react';
import {robots} from './people'
import Cardlist from './CardList'
import SearchBox from './Searchbox.js'

const App= () =>{
    return(
        <div class="tc">
        <h1>RoboFriends</h1>
        <SearchBox/>
        <Cardlist robots={robots} />
        </div>
    ) 

}
export default App;