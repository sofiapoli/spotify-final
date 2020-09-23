import React, {Component} from 'react';
import{Link} from 'react-router-dom';
import './homeView.css';

var x;

class HomeView extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.acept = this.acept.bind(this);
    }

    handleChange(event) { 
        x = this.state.value;
        window.location.href= '/artistsListView?value='+x;
        event.preventDefault();
    }
 
    acept(event){
        this.setState({value: event.target.value});
    }

    render() {
        return (
            <article className="home-article-principal">
                <div className="home-inside">
                    <header className="home-view__title">
                        <p className="home-pre-title">Welcome to</p>
                        <p className="title">Spotisearch</p>
                        <p className="text">Search your favourite song over Spotify, just enter an artist's name in the<br/>
                        following search box and enjoy!</p>
                    </header>
                    <div className="home-view__s">
                        <form name="myForm" action="/artistsListView" onSubmit={this.handleChange} method="get">
                            <input type="text" id="artista" className="home-view__search-query" value={this.state.value} onChange={this.acept} placeholder="Type the name of your favorite artist..." /> 
                            <input type="submit" value="search"/>
                        </form>
                    </div>
                    <div className="home-view__favourites">
                        <h3>Favorite Songs</h3>
                        <div className="home-view__favourites-stored">
                        </div>
                    </div>
                    <nav className="home-view__nav">
                        <ul>
                            <li><Link className="links" to="./mainView">Main View</Link></li>
                            <li></li>
                            <li>Home View</li>
                            
                        </ul>
                    </nav>
                </div>
               
            </article>
        );
    }
}

export default HomeView;