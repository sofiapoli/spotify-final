import axios from 'axios';
import React from 'react';

import AlbumCard from '../albumView/AlbumCard';


class Artist extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      albums: []
    }
    
  }
  
  componentDidMount() {
   
    const token = 'BQDc_N8UvwS7aPGINMDZtF9lC0mw4l-V5pvDTfnXR_2BuJ-dKX3kVFRF8NGBg3z5d5QajFy9ZJs4oDqGxD0';

 
    
    const headers = {
      Authorization: 'Bearer ' + token,
    }
    axios.get('https://api.spotify.com/v1/browse/new-releases', { headers })
      .then(res => {
        console.log(res.data.albums.items);
        this.setState({albums: res.data.albums.items})
      }) 

  }

  render() {

    const { albums } = this.state
    
    return (
      
        
        <div>
          <p className="white">Artists Component</p>  
          <div>
          
            {albums.map(album => <AlbumCard album={album} key={album.id} />)}
          </div>
        </div>
      
    )
  }
}
export default Artist;