import React from "react";
import SpotifyWebApi from 'spotify-web-api-js';

const spotifyApi = new SpotifyWebApi();

class Home extends React.Component {
  constructor() {
    super();

    const token = sessionStorage.getItem("token");

    if (token) {
      console.log(token)
      spotifyApi.setAccessToken(token);
    }

    this.state = {
      loggedIn: token ? true : false,
      nowPlaying: { name: 'Not Checked', albumArt: '' }
    }
  }

  componentDidMount() {
    this.getNowPlaying()
  }

  getNowPlaying() {
    spotifyApi.getMyCurrentPlaybackState()
      .then((res) => {
        console.log(res);
        this.setState({
          nowPlaying: {
            name: res.item.name,
            albumArt: res.item.album.images[0].url
          }
        });
      })
      .catch(err => console.log(err))
  }

  playPlayback() {
    spotifyApi.play()
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }
  pausePlayback() {
    spotifyApi.pause()
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

  startOrResumePlayback() {
    var song = {
      "context_uri": "spotify:album:5ht7ItJgpBH7W6vJ5BqpPr",
      "offset": {
        "position": 5
      },
      "position_ms": 0
    };
    console.log(spotifyApi.play(song))
    spotifyApi.play(song)
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <div>

        </div>
        <div className="App">
          <a
            href="http://localhost:8888/login"
          >
            Login to Spotify
            </a>
          <div>
            Now Playing: {this.state.nowPlaying.name}
          </div>
          <div>
            <img src={this.state.nowPlaying.albumArt} style={{ height: 150 }} />
          </div>
          {this.state.loggedIn &&
            <div>
              <button onClick={() => this.getNowPlaying()}>Check Now Playing</button>
              <button onClick={() => this.pausePlayback()}>Pause</button>
              <button onClick={() => this.playPlayback()}>Play</button>
              <button onClick={() => this.startOrResumePlayback()}>Play Carly Rae Jepsen</button>
            </div>
          }
        </div>
      </div>
    );
  }
}

export default Home;