import React from "react";

import Header from "../Header";

import { NewReleases } from "../NewReleases";

import Searchbar from "../Searchbar";
import Footer from "../Footer";
import SongsList from "../Songs/SongsList";

//import SongsList from '../Songs/SongsList';

function Home() {
  return (
    <div className="main-bkg">
      <Header />

      <div className="container mx-auto text-black-300 mt-6">
        <span className="text-3xl font-bold cursive font-style: italic text-pink-800">
          Welcome to
        </span>

        <h1 className="text-5xl font-sans-serif font-style: italic text-pink-800">
          Spotisearch
        </h1>

        <h4 className="text-xl font-bold">
          Search your favorite song over Spotify, just enter an artist's name in
          the
          <br></br>
          following the search box and enjoy!
        </h4>

        <Searchbar />

        {/* If the user is logged in favourites should be displayed */}

        <div>
          <h2 className="text-black font-bold text-2xl">Favorite Songs</h2>

          <SongsList />

          <SongsList />

          <SongsList />
        </div>

        <hr className="mt-5 mb-4 " />

        <NewReleases />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
