import React from "react";
import { Link } from "react-router-dom";

const SongCard = ({ album }) => {
  const { name, images, artists, release_date: releaseDate } = album;

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
    

      <img className="flex justify-between" src={images[0].url} alt={name} />

    

      <div className="px-4 py-4">
        <div className="font-bold text-black text-xl mb-2">{name}</div>

        <p className="text-black text-base">
          <Link to={"artists/" + artists[0].id}>
            {artists[0].name}{" "}
            {artists.length > 1 ? "& " + artists[1].name : null}
            <Link to={`/albumList/${album.id}`}>
              {" "}
              <br></br>
            
            </Link>
          </Link>
        </p>
      </div>

      <div className="px-6 pt- pb-2">
        <span className="inline-block bg-pink-800 rounded px-3 py-1 text-sm font-bold text-white-700 mr-2 mb-2">
          {releaseDate}
        </span>
      </div>
    </div>
  );
};

export default SongCard;
