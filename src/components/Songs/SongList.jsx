import React from "react";

const SongList = ({ tracks }) => {
  const { name, album, duration_ms } = tracks;

  function millisToMinutesAndSeconds(ms) {
    var minutes = Math.floor(ms / 60000);
    var seconds = ((ms % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  }

  return (
    <div className="flex inline-block justify-between border-b border-grey-300">
      <div className="inline-flex items-center">
        <img src={album.images[0] ? album.images[2].url : ""} alt={name} />
        <span className="ml-3">{name}</span>
      </div>
      <div className="flex items-center">
        <span className="mr-3">{millisToMinutesAndSeconds(duration_ms)}</span>
      </div>
    </div>
  );
};

export default SongList;
