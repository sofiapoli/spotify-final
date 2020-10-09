
import React from 'react';



const SongsList = () => {

  return (

    <div className="flex inline-flex justify-between p-2">

      <div>

        <img src="https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg" alt=""/>

      </div>

      <div className="ml-4">

        <h5 className="font-bold text-xl">Song Name / Artist Name</h5>

        <p className="mt-2 mb-2">Artist: Artist Name</p>

        <p>Album: Album Name</p>

      </div>

    </div>

  )

}



export default SongsList