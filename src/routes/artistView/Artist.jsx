import axios from "axios";
import React, { useEffect, useState } from "react";
import qs from "query-string";

import AlbumCard from "./AlbumCard";
import { useLocation } from "react-router-dom";

export function Artist() {
  const [albums, setAlbums] = useState([]);
  const location = useLocation();
  const query = qs.parse(location.search);

  console.log(query);
  useEffect(() => {
    const token =
      "BQCyf7K1ObLA2zu_yOOTR3PsBqVjpbyHBC7LHxZvWKo_dqaKALSRLO5R1Z_vQFdi17IDq-mwbkPwLXph7Es";

    const headers = {
      Authorization: "Bearer " + token,
    };
    axios
      .get("https://api.spotify.com/v1/browse/new-releases", { headers })
      .then((res) => {
        console.log(res.data.albums.items);
        setAlbums(res.data.albums.items);
      });
  }, []);

  return (
    <div>
      <p className="white">Artists Component</p>
      <div>
        {albums.map((album) => (
          <AlbumCard album={album} key={album.id} />
        ))}
      </div>
    </div>
  );
}
