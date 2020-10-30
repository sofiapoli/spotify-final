import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Loading from "./Loading/Loading";
import SongList from "./Songs/SongList";
import { spotify } from "../api/spotify";

const Favotites = () => {
  const favorites = useSelector((state) => state.favorites);

  const [tracks, setTracks] = useState(null);

  useEffect(() => {
    console.log(favorites);

    spotify.get(`tracks?ids=${favorites.join(",")}`).then((response) => {
      console.log(response.data);
      setTracks(response.data.tracks);
    });
  }, [favorites]);
  return (
    <div>
      <h2 className="text-black font-bold text-2xl mb-2">Favorite Songs</h2>

      <ul>
        {tracks ? (
          tracks.map((track) => <SongList tracks={track} key={track.id} />)
        ) : (
          <Loading />
        )}
      </ul>
    </div>
  );
};

export default Favotites;
