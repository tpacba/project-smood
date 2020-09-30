import React from "react";
import SpotifyWebApi from "spotify-web-api-js";
import Button from '@material-ui/core/Button';
// import { makeStyles } from '@material-ui/core/styles';
import MusicPlayer from '../components/MusicPlayer/MusicPlayer'


const spotifyApi = new SpotifyWebApi();

class Home extends React.Component {
  state = {
    loggedIn: false
  }

  componentDidMount() {
    this.handleToken();
  }

  handleToken() {
    const token = sessionStorage.getItem("token");
    if (token) {
      console.log(token);
      spotifyApi.setAccessToken(token);
      this.setState({ loggedIn : true})
    }
  }

  render() {
    return (
      <div>
        <div></div>
        <div className="App">
          {!this.state.loggedIn && 
          <Button variant="contained" size="large" color="primary" onClick={() =>
            (window.location.href =
              process.env.REACT_APP_CALLBACK ||
              "http://localhost:8888/api/login")
          }>
            Login to Spotify
          </Button>
          }
          {this.state.loggedIn && (<MusicPlayer />)}
        </div>
      </div>
    );
  }
}

export default Home;
