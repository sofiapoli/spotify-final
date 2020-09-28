import React from 'react';

const AlbumCard = ({ album }) => {
  const { name, images, artists, release_date: releaseDate } = album

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={images[0].url} alt={name} />
      <div className="px-6 py-4">
        <div className="font-bold text-white text-xl mb-2">{ name }</div>
        <p className="text-white text-base">
          {artists[0].name }  { artists.length > 1 ? '& ' + artists[1].name : null }
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{ releaseDate }</span>
      </div>
    </div>
  )
}

export default AlbumCard;