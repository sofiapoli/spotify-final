import React from 'react';
import Home from './components/Home'
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
             <Route path ="/artistList">
                 <ArtistList />
             </Route>
            
         </Switch>
     </Router>
      </div>
    );
  }
  
  export default HomeR;