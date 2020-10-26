import React from "react";
import { Link } from "react-router-dom";

const AlbumList = ({ album }) => {
  const { name, images, artists, release_date, total_tracks } = album;
  return (
    <div className="flex flex-wrap max-w-sm">
      <div className="flex p-3">
        <div>
          <Link to={artists[0].id + "/" + album.id}>
            <img
              src={
                images[0]
                  ? images[1].url
                  : "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg"
              }
              alt={name}
            />
          </Link>
        </div>

        <div className="ml-4">
          <h5 className="font-bold text-xl">{name}</h5>
          <p className="inline-block bg-pink-800 rounded px-3 py-1 text-sm font-bold text-white-700 mr-2 mb-2">
            {release_date}
          </p>
          <p className="mt-2 mb-2">Tracks: {total_tracks}</p>
        </div>
      </div>
    </div>
  );
};

export default AlbumList;
