import React from 'react';
import Artist from './components/Artist'
import ArtistList from './components/ArtistList'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

  function HomeR() {
    return (
      <div >
         <Router>
         <Switch>
             <Route path ="/artist">
                 <Artist />
             </Route>
            
         </Switch>
     </Router>
      </div>
    );
  }
  
  export default HomeR;