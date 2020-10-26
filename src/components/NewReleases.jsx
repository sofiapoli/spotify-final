import axios from "axios";

import React, { useEffect, useState } from "react";
import qs from "query-string";

import Loading from "./Loading/Loading";

import SongCard from "./Songs/SongCard";

import { useLocation } from "react-router-dom";

export function NewReleases() {
  const [albums, setAlbums] = useState([]);
  const location = useLocation();
  const query = qs.parse(location.search);

  console.log(query);
  useEffect(() => {
    const token =
      "BQDS1JTSgn11C7EncGxeWmcBuYH9rNPQOBN9FZ_yrKCDzD1_Npauaw0Uc8-YVVwh-TPfUFWUALY6pnYQLbk";

    const headers = {
      Authorization: "Bearer " + token,
    };
    axios
      .get("https://api.spotify.com/v1/browse/new-releases", { headers })
      .then((res) => {
        setAlbums(res.data.albums.items);
      });
  }, []);

  return (
    <div>
      <h1 className="font-bold text-xl mb-8">New Releases</h1>

      <div className="flex flex-wrap justify-between">
        {albums ? (
          albums.map((album) => <SongCard album={album} key={album.id} />)
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
}
