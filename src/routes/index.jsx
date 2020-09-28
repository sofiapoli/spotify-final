import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainView from './mainView/MainView';
import HomeView from './homeView/HomeView';
/*import ArtistsListView from './artistsListView/artistsListView';
import ArtistView from './artistView/artistView';
import AlbumView from './albumView/albumView';*/

const getRoutes = function() {
    return (
        <div>
            <Route name="Main" component={MainView} />
            <Switch>
                <Route exact path="/homeView" component={HomeView} />
               
            </Switch>
        </div>
    )
};

export default getRoutes;