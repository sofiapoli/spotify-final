import Axios from "axios";

import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import Breadcrumb from "../Breadcrumb";

import Header from "../Header";
import Footer from "../Footer";
import Loading from "../Loading/Loading";


import AlbumCard from "../Album/AlbumCard";

const Artist = () => {
  const [artist, setArtist] = useState(null);

  const [artistAlbum, setArtistAlbum] = useState(null);

  const { artistId } = useParams();

  useEffect(() => {
    const token =
      "BQDS1JTSgn11C7EncGxeWmcBuYH9rNPQOBN9FZ_yrKCDzD1_Npauaw0Uc8-YVVwh-TPfUFWUALY6pnYQLbk";

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

     
      <h2 className="font-bold text-4xl mt-3 text-pink-800">Artist</h2>

      {!artist ? (
        <Loading />
      ) : (
        <div className="container mx-auto text-black">
          <div className="flex inline-flex justify-between p-2">
            <div>
              <img
                src={
                  artist.images[0]
                    ? artist.images[1].url
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

          <div className="mt-3 mb-3">
          <Breadcrumb
                key={artist.id}
                links={[
                  { to: "/artists", label: "Artists" },
                  { to: "/artists/artistId", label: `${artist.name}` },
                ]} className="mt-8"
              />

            <hr />
          </div>

          <div className="container">
            <div className="mt-10">
              <div className="flex justify-between"></div>
            </div>
            <div className="mt-10">
              {artistAlbum ? (
                artistAlbum.map((album) => (
                  <div className="inline-flex">
                    <AlbumCard album={album} key={album.id} />
                  </div>
                ))
              ) : (
                <Loading />
              )}
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Artist;
