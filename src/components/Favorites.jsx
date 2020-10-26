import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import Loading from "./Loading/Loading";
import SongList from "./Songs/SongList";

const Favs = () => {
  const favorites = useSelector((state) => state.favorites);

  const [tracks, setTracks] = useState(null);

  useEffect(() => {
    const token =
      "BQAz_kosgnHiXDq7-KeG6j_bGyBg2I2puTQFpkG_orOdx_GaeaaCjj0o01-lcMcU-GH5jy3OqWIHw8U9ecE";
    const headers = {
      Authorization: "Bearer " + token,
    };

    console.log(favorites);

    axios
      .get(`https://api.spotify.com/v1/tracks?ids=${favorites.toString()}`, {
        headers,
      })
      .then((response) => {
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

export default Favs;
