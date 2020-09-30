import React from "react";
import SpotifyWebApi from "spotify-web-api-js";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import MusicPlayer from '../components/MusicPlayer/MusicPlayer'


const spotifyApi = new SpotifyWebApi();

class Home extends React.Component {
  constructor() {
    super();

    const token = sessionStorage.getItem("token");

    if (token) {
      console.log(token);
      spotifyApi.setAccessToken(token);
    }

    this.state = {
      loggedIn: token ? true : false,
      nowPlaying: { name: "Not Checked", albumArt: "" },
    };
  }

  componentDidMount() {
    this.getNowPlaying();
  }

  getNowPlaying() {
    spotifyApi
      .getMyCurrentPlaybackState()
      .then((res) => {
        console.log(res)
        this.setState({
          nowPlaying: {
            name: res.item.name,
            albumArt: res.item.album.images[0].url,
          },
        });
      })
      .catch((err) => console.log(err));
  }

  playPlayback() {
    spotifyApi
      .play()
      .catch((err) => console.log(err));
  }
  pausePlayback() {
    spotifyApi
      .pause()
      .catch((err) => console.log(err));
  }

  startOrResumePlayback() {
    var song = {
      context_uri: "spotify:album:5ht7ItJgpBH7W6vJ5BqpPr",
      offset: {
        position: 5,
      },
      position_ms: 0,
    };
    console.log(spotifyApi.play(song));
    spotifyApi
      .play(song)
      .catch((err) => console.log(err));
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
          {this.state.loggedIn && (
            <div>
              <MusicPlayer />
              <div>Now Playing: {this.state.nowPlaying.name}</div>
              <div>
                <img src={this.state.nowPlaying.albumArt} style={{ height: 150 }} />
              </div>
              <button onClick={() => this.getNowPlaying()}>
                Check Now Playing
              </button>
              <button onClick={() => this.pausePlayback()}>Pause</button>
              <button onClick={() => this.playPlayback()}>Play</button>
              <button onClick={() => this.startOrResumePlayback()}>
                Play Carly Rae Jepsen
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Home;
