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