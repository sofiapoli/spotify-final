import React from "react";

const ArtistCard = ({ artist }) => {
  const { images, name, genres } = artist;

  return (
    <div className="container mx-auto text-white">
      <div className="flex inline-flex justify-between p-2">
        <div>
          <img src={images[1].url} alt={name} />
        </div>

        <div className="ml-4">
          <h5 className="font-bold text-3xl">{name}</h5>

          <p className="mt-2 mb-2 capitalize">{genres[0]}</p>
        </div>
      </div>
    </div>
  );
};
export default ArtistCard;
