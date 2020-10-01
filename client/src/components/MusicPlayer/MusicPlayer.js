import React from 'react';
import "./MusicPlayer.css";
import SpotifyWebApi from 'spotify-web-api-js';

import play from '../../assets/icons/play.png';
import forward from '../../assets/icons/forward.png';
import backward from '../../assets/icons/backward.png';

const spotifyApi = new SpotifyWebApi();

class App extends React.Component {
  constructor() {
    super();

    const token = sessionStorage.getItem("token")

    if (token) {
      spotifyApi.setAccessToken(token);
    }

    this.state = {
      loggedIn: token ? true : false,
      is_playing: false,
      nowPlaying: { song: 'Not Checked', artist: 'Not Checked', albumArt: '' }
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
          is_playing: res.is_playing,
          nowPlaying: {
            song: res.item.name,
            artist: res.item.artists[0].name,
            albumArt: res.item.album.images[0].url
          }
        });
      })
      .catch(err => console.log(err))
  }

  playPlayback() {
    this.getNowPlaying();
    spotifyApi.play()
      .then(() => this.setState({ is_playing: true }))
      .catch(err => console.log(err))
  }
  pausePlayback() {
    this.getNowPlaying();
    spotifyApi.pause()
      .then(() => this.setState({ is_playing: false }))
      .catch(err => console.log(err))
  }

  nextPlayback() {
    spotifyApi.skipToNext()
      .then(() => {
        this.getNowPlaying();
        console.log("new state", this.state)
        this.forceUpdate();
      })
      .catch(err => console.log(err))
  }

  previousPlayback() {
    spotifyApi.skipToPrevious()
      .then(() => {
        this.getNowPlaying();
        console.log("new state", this.state)
        this.forceUpdate();
      })
      .catch(err => console.log(err))
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <div className="container">
          <div className="box"></div>
          {/*pic of artist  */}
          <img alt="album art" src={this.state.nowPlaying.albumArt} id="thumbnail" />
          <div className="song-artist">{this.state.nowPlaying.artist}</div>
          <div className="song-title">{this.state.nowPlaying.song}</div>

          {/* play button */}
          <img alt="" src={play} onClick={() => {
            if (this.state.is_playing) {
              this.pausePlayback();
            } else {
              this.playPlayback();
            }
          }} id="play-pause" />

          {/* next button */}
          <img alt="" src={forward} onClick={() => this.nextPlayback()} id="next-song" />

          {/* previous button */}
          <img alt="" src={backward} onClick={() => this.previousPlayback()} id="previous-song" />

          {/* <input
            type="range"
            id="progress-bar"
            min="0"
            max=""
            value=
            onChange="changeProgressBar()"
          /> */}

          <div className="currentTime"></div>
          <div className="durationTime"></div>
        </div>
      </div>
    );
  }
}

export default App;