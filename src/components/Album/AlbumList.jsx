import Axios from "axios";
import React, { useEffect, useState } from "react";
import Searchbar from "../Searchbar";
import Header from "../Header";
import Footer from "../Footer";
import { useParams } from "react-router-dom";
import Loading from "../Loading/Loading";
import Breadcrumb from "../Breadcrumb";
import SongCard from "../Songs/SongCard";

const AlbumList = () => {
  const [album, setAlbum] = useState(null);

  const [song, setSong] = useState(null);

  const { albumId } = useParams();

  useEffect(() => {
    const token =
      "BQB0CCyhWq5lijMwqhZGnWaXOisbMZBxSGL28Bep-28UKcSbVcOdObxesXYQg23WjtAHKIk8aCnmoPPnMSk";

    const headers = {
      Authorization: "Bearer " + token,
    };

    Axios.get(`https://api.spotify.com/v1/albums/${albumId}`, { headers }).then(
      (res) => {
        setAlbum(res.data);

        Axios.get(`https://api.spotify.com/v1/albums/${albumId}/tracks`, {
          headers,
        }).then((response) => {
          console.log(response.data);

          setSong(response.data.items);
        });
      }
    );
  }, [albumId]);

  return (
    <div>
      <Header />
      <Searchbar />
      {!album ? (
        <Loading />
      ) : (
        <div className="container mx-auto text-black">
          <div className="flex inline-flex justify-between p-2">
            <div>
              <img
                src={
                  album.images[0]
                    ? album.images[0].url
                    : "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg"
                }
                alt={album.name}
              />
            </div>

            <div className="ml-4">
              <h5 className="font-bold text-3xl">{album.name}</h5>

              <p className="mt-2 mb-2 capitalize">{album.genres[0]}</p>
            </div>
          </div>

          <div>
            <hr />
            <div>
              <div className="flex flex-wrap justify-between">
                <div>
                  {song ? (
                    song.map((song) => (
                      <ul className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                        <li>{song.name}</li>
                      </ul>
                    ))
                  ) : (
                    <Loading />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AlbumList;
