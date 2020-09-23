import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import './mainView.css';

class MainView extends Component {
    render(){
        return (
            <article className="main-view">
                <header className="main-view_header">
                    <h2>Bienvenido a Spotify</h2>
                </header>
                <nav className="main-view_nav">
                    <li><Link className="links" to="/homeView">Home</Link></li>
                </nav>
            </article>
        )
    }
}

export default MainView;