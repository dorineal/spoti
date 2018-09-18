import React, { Component } from 'react';
import './assets/css/ArtistsList.css';
import Artist from './Artist';


class ArtistsList extends Component { 
  constructor(){
    super();
    this.displayArtist = this.displayArtist.bind(this);
  }
  
  displayArtist(artistId){
    //change css of Artist
    return <Artist artistId={artistId} token={this.props.token}/>
  }
  
  render() {
    console.log('props', this.props)
    return (
      <div className="ArtistsList">
      {this.props.results.items ? this.props.results.items.map((item) => {
        return (
          <div className="Artist" key={item.id} onClick={(e) => this.displayArtist(item.id)}>
          { item.images.length > 0 ? <img src={item.images[1].url} width="100px" alt={item.name}/> : '' }
            <p>{item.name}</p>
            
          </div>
        )
      }) : <div className="Artist">No Artist Found</div>}
      </div>
    );
  }
}

export default ArtistsList;

// App should list all Albums for a given Artist, ordered by Release year, and should display its cover, name, genre, release year and popularity