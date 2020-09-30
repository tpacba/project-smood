import React from 'react';
import "./MusicPlayer.css";
import SpotifyWebApi from 'spotify-web-api-js';

import play from '../../assets/icons/play.png';
import pause from '../../assets/icons/pause.png';
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
      nowPlaying: { song: 'Not Checked', artist: 'Not Checked', albumArt: ''}
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
    spotifyApi.play()
      .then(() => this.setState({is_playing: true}))
      .catch(err => console.log(err))
  }
  pausePlayback() {
    spotifyApi.pause()
      .then(() => this.setState({is_playing: false}))
      .catch(err => console.log(err))
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <div class="container">
          <div class="box"></div>
          {/*pic of artist  */}
          <img src={this.state.nowPlaying.albumArt} id="thumbnail" />
          <div class="song-artist">{this.state.nowPlaying.artist}</div>
          <div class="song-title">{this.state.nowPlaying.song}</div>

          {/* play button */}
          <img src={play} onClick={() => {
            if(this.state.is_playing) {
              this.pausePlayback();
            } else {
              this.playPlayback();
            }
          }} id="play-pause" />

          {/* next button */}
          {/* <img src={forward} onclick="nextSong()" id="next-song" /> */}
          {/* previous button */}
          {/* <img src={backward} onclick="previousSong()" id="previous-song" /> */}

          <input
            type="range"
            id="progress-bar"
            min="0"
            max=""
            value="0"
            onchange="changeProgressBar()"
          />

          <div class="currentTime"></div>
          <div class="durationTime"></div>
        </div>
      </div>
    );
  }
}

export default App;