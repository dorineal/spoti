import React from 'react';
import logo from './logo.svg';

const Home = () => (
  <div>
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Spoti. Browse Spotify by artists.</h1>
    </header>
    <h2>You must identify to Spotify in order to continue</h2>
    <a href="https://accounts.spotify.com/authorize?client_id=c77128a3bbf34e989e53321446fd266a&response_type=token&redirect_uri=http://localhost:3000/loggedin">HERE</a>
  </div>
)

export default Home;