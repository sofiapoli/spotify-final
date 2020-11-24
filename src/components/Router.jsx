import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import Artist from "./Artists/Artist";

import ArtistList from "./Artists/ArtistList";
import AlbumList from "./Album/AlbumList";
import Login from "./Login";


import Home from "./Home/Home";

class Router extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          {/* <Route exact path="/favs" component={Favs}></Route> */}

          <Route exact path="/artists" component={ArtistList}></Route>

          <Route exact path="/artists/:artistId" component={Artist}></Route>
          <Route
            exact
            path="/artists/:artistId/:albumId"
            component={AlbumList}
          ></Route>
          <Route path="/callback" component={Login}></Route>
          <Route path="/" component={Home}></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
