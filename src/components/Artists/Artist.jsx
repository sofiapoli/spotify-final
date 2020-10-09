import Axios from "axios";

import React, { useEffect, useState } from "react";

import { Link, useParams } from "react-router-dom";

import Breadcrumb from "../Breadcrumb";

import Header from "../Header";

import Loading from "../Loading/Loading";
import Searchbar from "../Searchbar";

import SongCard from "../Songs/SongCard";

const Artist = () => {
  const [artist, setArtist] = useState(null);

  const [artistAlbum, setArtistAlbum] = useState(null);

  const { artistId } = useParams();

  useEffect(() => {
    const token =
      "BQB0CCyhWq5lijMwqhZGnWaXOisbMZBxSGL28Bep-28UKcSbVcOdObxesXYQg23WjtAHKIk8aCnmoPPnMSk";

    const headers = {
      Authorization: "Bearer " + token,
    };

    Axios.get(`https://api.spotify.com/v1/artists/${artistId}`, {
      headers,
    }).then((res) => {
      setArtist(res.data);

      Axios.get(`https://api.spotify.com/v1/artists/${artistId}/albums`, {
        headers,
      }).then((response) => {
        console.log(response.data.items);

        setArtistAlbum(response.data.items);
      });
    });
  }, [artistId]);

  return (
    <div>
      <Header />
      <Searchbar />
      {!artist ? (
        <Loading />
      ) : (
        <div className="container mx-auto text-black">
          <div className="flex inline-flex justify-between p-2">
            <div>
              <img
                src={
                  artist.images[0]
                    ? artist.images[0].url
                    : "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg"
                }
                alt={artist.name}
              />
            </div>

            <div className="ml-4">
              <h5 className="font-bold text-3xl">{artist.name}</h5>

              <p className="mt-2 mb-2 capitalize">{artist.genres[0]}</p>
            </div>
          </div>

          <div>
            <Breadcrumb
              key={artist.id}
              links={[
                { to: "/artists", label: "Artists" },

                { to: "/artists/artistId", label: `${artist.name}` },
              ]}
              className="mt-8"
            />

            <hr />
          </div>

          <div>
            <div className="flex flex-wrap justify-between">
              <div>
                {artistAlbum ? (
                  artistAlbum.map((album) => (
                    <SongCard album={album} key={album.id} />
                  ))
                ) : (
                  <Loading />
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Artist;
