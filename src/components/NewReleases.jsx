import React, { useEffect, useState } from "react";
import qs from "query-string";
import Loading from "./Loading/Loading";
import SongCard from "./Songs/SongCard";
import { useLocation } from "react-router-dom";
import { spotify } from "../api/spotify";

export function NewReleases() {
  const [albums, setAlbums] = useState([]);
  const location = useLocation();
  const query = qs.parse(location.search);

  console.log(query);
  useEffect(() => {
    spotify.get("browse/new-releases").then((res) => {
      setAlbums(res.data.albums.items);
    });
  }, []);

  return (
    <div className="container mx-auto px-4">
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
