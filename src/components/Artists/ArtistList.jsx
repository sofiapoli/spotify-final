import axios from "axios";

import queryString from "query-string";

import React, { useEffect, useState } from "react";

import { Link, useLocation } from "react-router-dom";

import Header from "../Header";

import Loading from "../Loading/Loading";
import Searchbar from "../Searchbar";
import Footer from "../Footer";

const ArtistList = () => {
  const location = useLocation();

  const query = queryString.parse(location.search);

  const [artists, setArtists] = useState(null);

  useEffect(() => {
    const token =
      "BQB0CCyhWq5lijMwqhZGnWaXOisbMZBxSGL28Bep-28UKcSbVcOdObxesXYQg23WjtAHKIk8aCnmoPPnMSk";

    const headers = {
      Authorization: "Bearer " + token,
    };

    axios
      .get(
        `https://api.spotify.com/v1/search?q=${query.search}&type=artist&limit=10`,
        { headers }
      )

      .then((res) => {
        console.log(res.data.artists.items);

        setArtists(res.data.artists.items);
      });
  }, [query.search]);

  return (
    <div>
      <Header />

      <Searchbar />
      <div className="container mx-auto black">
        <h2 className="font-bold text-4xl mt-3 text-pink-800">Artists</h2>

        <hr className="mt-3 mb-3" />

        <div>
          {!artists ? (
            <Loading />
          ) : (
            artists.map((artist) => (
              <div>
                <h1>{artist.name}</h1>

                <img
                  src={
                    artist.images[0]
                      ? artist.images[0].url
                      : "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg"
                  }
                  alt={artist.name}
                />
                <Link to={`/artists/${artist.id}`}>ir al album</Link>
              </div>
            ))
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ArtistList;
