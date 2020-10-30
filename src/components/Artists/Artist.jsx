import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Breadcrumb from "../Breadcrumb";
import Header from "../Header";
import Footer from "../Footer";
import Loading from "../Loading/Loading";
import { spotify } from "../../api/spotify";

import AlbumCard from "../Album/AlbumCard";

const Artist = () => {
  const [artist, setArtist] = useState(null);

  const [artistAlbum, setArtistAlbum] = useState(null);

  const { artistId } = useParams();

  useEffect(() => {
    async function getData() {
      const { data: artist } = await spotify.get(`artists/${artistId}`);
      setArtist(artist);
      const {
        data: { items: albums },
      } = await spotify.get(`artists/${artistId}/albums`);
      setArtistAlbum(albums);
    }
    getData();
  }, [artistId]);

  return (
    <div>
      <Header />
      <div className="container mx-auto p-4">
        <h2 className="font-bold text-4xl text-pink-800">Artist</h2>

        {!artist ? (
          <Loading />
        ) : (
          <div className="container mx-auto px-4 text-black">
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
                ]}
                className="mt-8"
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
      </div>
      <Footer />
    </div>
  );
};

export default Artist;
