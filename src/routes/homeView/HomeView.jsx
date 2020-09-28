import "./homeView.css";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { Artist } from "../artistView/Artist";
import { SearchForm } from "../../components/SearchForm";

class HomeView extends Component {
  render() {
    return (
      <article className="home-article-principal">
        <div className="home-inside">
          <header className="home-view__title">
            <p className="home-pre-title">Welcome to</p>
            <p className="title">Spotisearch</p>
            <p className="text">
              Search your favourite song over Spotify, just enter an artist's
              name in the
              <br />
              following search box and enjoy!
            </p>
          </header>
          <div className="SearchForm-wrapper">
            <SearchForm />
          </div>
          <div className="home-view__favourites">
            <h3>Favorite Songs</h3>
            <div className="home-view__favourites-stored"></div>
          </div>
          <nav className="home-view__nav">
            <ul>
              <li>
                <Link className="links" to="./mainView">
                  Main View
                </Link>
              </li>
              <li></li>
              <li>Home View</li>
            </ul>
          </nav>
        </div>
        <Artist />

        <footer className="home-view__footer">
          <img src={logo} className="home-view__logo" alt="logo" />
        </footer>
      </article>
    );
  }
}

export default HomeView;
