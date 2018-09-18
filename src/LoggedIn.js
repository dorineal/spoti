import React, { Component } from 'react';
import {withRouter} from "react-router-dom";

import './assets/css/LoggedIn.css';
import ArtistsList from './ArtistsList';

class LoggedIn extends Component {
  constructor(props){
     super(props);
     this.state = {
       query: '',
       results: [],
       token: {},
       error: '',
       'artistId': null
     }
  }
  
  componentDidMount() {
    var response = {};
    this.props.location.hash.split('&').map((token) => {
        response[token.split('=')[0]] = token.split('=')[1];
        return token;
    });
    this.setState({
      token: response
    });
  }

  getInfo = () => {
    var query = "https://api.spotify.com/v1/search?q=" + this.state.query + "&type=artist";
    fetch(query, { 
       method: 'get', 
       headers: new Headers({
         'Authorization': this.state.token['token_type'] + ' ' + this.state.token['#access_token'],
       })
    })
    .then(res => res.json())
    .then(
      (result) => {
        console.log('results', result);
        if(result.error) {
          console.log(result.error);
          this.props.history.push("/");
        }
        this.setState({
          isLoaded: true,
          results: result.artists
        });
      })
    }
        

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    }, () => {
      if (this.state.query && this.state.query.length > 1) {
        if (this.state.query.length % 2 === 0) {
          this.getInfo()
        }
      } 
    })
  }
  
  render() {
    return (
      <div className="LoggedIn">
        <h2>You can now browse for artists</h2>
        <p className="App-intro">
          Start Browsing
        </p>
        <form>
          <input
            placeholder="Search for..."
            ref={input => this.search = input}
            onChange={this.handleInputChange}
          />
          <p>{this.state.query}</p>
        </form>
        <ArtistsList {...this.state}/>
      </div>
    );
  }
}

export default withRouter(LoggedIn);