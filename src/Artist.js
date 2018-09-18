import React, { Component } from 'react';
import './assets/css/Artist.css';


class Artist extends Component { 
  constructor(){
    super();
    this.state = {
      albums: []
    }
  }
  getInfo = () => {
    var query = "https://api.spotify.com/v1/artists/" + this.props.artistId;
    fetch(query, { 
       method: 'get', 
       headers: new Headers({
         'Authorization': this.props.token['token_type'] + ' ' + this.props.token['#access_token'],
       })
    })
    .then(res => res.json())
    .then(
      (result) => {
        console.log('results 2', result);
        if(result.error) {
          console.log(result.error);
          this.props.history.push("/");
        }
        this.setState({
          albums: result.albums
        });
      })
    }
  render() {
    this.getInfo();
    return 'Artist';
  }
}

export default Artist;

// App should list all Albums for a given Artist, ordered by Release year, and should display its cover, name, genre, release year and popularity