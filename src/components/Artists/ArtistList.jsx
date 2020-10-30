import queryString from "query-string";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { spotify } from "../../api/spotify";
import Breadcrumb from "../Breadcrumb";
import Footer from "../Footer";
import Header from "../Header";

import Loading from "../Loading/Loading";
import Searchbar from "../Searchbar";

const ArtistList = () => {
  const location = useLocation();
  const query = queryString.parse(location.search);
  const [artists, setArtists] = useState(null);
  useEffect(() => {
    spotify.get(`search?q=${query.search}&type=artist&limit=10`).then((res) => {
      setArtists(res.data.artists.items);
    });
  }, [query.search]);

  return (
    <div>
      <Header />
      <div className="container mx-auto p-4 text-black">
        <h2 className="font-bold text-4xl mt-3 text-pink-800">Artists</h2>

        <p>
          Search Results: <span className="font-bold">"{query.search}"</span>
        </p>
        
        <Searchbar />

        <div className="mt-6">
          <Breadcrumb
            links={[{ to: "/artists", label: "Artists" }]}
            className="mt-8"
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
