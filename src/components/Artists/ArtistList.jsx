import axios from "axios";

import queryString from "query-string";

import React, { useEffect, useState } from "react";

import { Link, useLocation } from "react-router-dom";

import Header from "../Header";

import Loading from "../Loading/Loading";

import Footer from "../Footer";
import Breadcrumb from "../Breadcrumb";

const ArtistList = () => {
  const location = useLocation();

  const query = queryString.parse(location.search);

  const [artists, setArtists] = useState(null);

  useEffect(() => {
    const token =
      "BQDS1JTSgn11C7EncGxeWmcBuYH9rNPQOBN9FZ_yrKCDzD1_Npauaw0Uc8-YVVwh-TPfUFWUALY6pnYQLbk";

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

      <div className="container mx-auto text-black">
        <h2 className="font-bold text-4xl mt-3 text-pink-800">Artists</h2>

 
        <p>
          Search Results: <span className="font-bold">"{query.search}"</span>
        </p>

        <div className="mt-6">
        <Breadcrumb 
            
            links={[
              { to: "/artists", label: "Artists" },
            ]} className="mt-8"
          />
        </div>

        <hr className="mt-2 mb-8" />

        <div className="flex flex-wrap">
          {!artists ? (
            <Loading />
          ) : (
            artists.map((artist) => (
              <div className="inline-flex">
                <div className="flex flex-wrap max-w-sm">
                  <div className="flex p-3">
                    <div>
                      <Link to={`/artists/${artist.id}`}>
                        <img
                          src={
                            artist.images[0]
                              ? artist.images[0].url
                              : "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg"
                          }
                          alt={artist.name}
                        />
                      </Link>
                    </div>

                    <div className="ml-4">
                      <h5 className="font-bold text-xl">
                        <Link to={`/artists/${artist.id}`}>{artist.name}</Link>
                      </h5>

                      <p className="mt-2 mb-2 capitalize">
                        {artist.genres[0]}{" "}
                        {artist.genres.length > 1
                          ? " | " + artist.genres[1]
                          : null}{" "}
                      </p>
                    </div>
                  </div>
                </div>
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
