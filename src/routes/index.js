import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainView from './mainView/mainView';
import HomeView from './homeView/homeView';



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