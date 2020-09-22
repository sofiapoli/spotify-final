import React from 'react';
import Home from './components/Home'
import ArtistList from './components/ArtistList'
import Album from './components/Album'
import Artist from './components/Artist'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

 

function App() {

    return (
     <Router>
         <h1>Navbar</h1>
         <hr />
         <Switch>
             <Route path ="/home">
                 <Home />
             </Route>
             <Route path ="/artistList">
                 <ArtistList />
             </Route>
             <Route path ="/artist">
                 <Artist />
             </Route>
             <Route path ="/album">
                 <Album />
             </Route>
         </Switch>
     </Router>
    );
  }
  
  export default App;