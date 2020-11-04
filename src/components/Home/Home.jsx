import React from "react";
import Header from "../Header";
import { NewReleases } from "../NewReleases";
import Searchbar from "../Searchbar";
import Footer from "../Footer";
import Favorites from "../Favorites";

const Home = () => {
  const isLogged = () => {
    let data = JSON.parse(localStorage.getItem("userData")) || [];
    return data.isLogged ? true : false;
  };
  return (
    <div>
      <Header />
      {isLogged() ? (
        false
      ) : (
        <button className="inline-center bg-pink-800 rounded px-3 py-1 text-sm font-bold text-white-700 mr-2 mb-2">
          <a href="https://accounts.spotify.com/authorize?client_id=09180cc3f92d4003830e094162ca2627&redirect_uri=http://localhost:3000/callback&response_type=token&state=userLogged">
            LOGIN USER
          </a>
        </button>
      )}

      <div className="container mx-auto p-2">
        <div className="container mx-auto text-black-300 mt-6">
          <span className="text-3xl font-bold cursive font-style: italic text-pink-800">
            Welcome to
          </span>

          <h1 className="text-5xl font-sans-serif font-style: italic text-pink-800">
            Spotisearch
          </h1>

          <h4 className="text-xl font-bold">
            Search your favorite song over Spotify, just enter an artist's name
            in the
            <br></br>
            following the search box and enjoy!
          </h4>

          <Searchbar />
          <div>
            <Favorites />
            <NewReleases />
          </div>

          <hr className="mt-5 mb-4 " />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
