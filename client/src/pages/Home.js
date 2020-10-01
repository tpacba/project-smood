import React from "react";
import SpotifyWebApi from "spotify-web-api-js";
import Button from '@material-ui/core/Button';
// import { makeStyles } from '@material-ui/core/styles';
import MusicPlayer from '../components/MusicPlayer/MusicPlayer'
import Login from '../components/Login';

import '../App.css';


const spotifyApi = new SpotifyWebApi();

class Home extends React.Component {
  state = {
    loggedIn: false
  }

  componentDidMount() {
    this.handleToken();
  }

  handleToken = () => {
    const token = sessionStorage.getItem("token");
    if (token) {
      spotifyApi.setAccessToken(token);
      this.setState({ loggedIn: true })
    }
  }

  render() {
    return (
      <div>
        {!this.state.loggedIn &&
          <Login></Login>
        }
        {this.state.loggedIn &&
          <MusicPlayer></MusicPlayer>}
      </div>
    );
  }
}

export default Home;