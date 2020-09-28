import React from 'react';
import './App.css';
import SpotifyWebApi from 'spotify-web-api-js';
import Nav from 'react-bootstrap/Nav';
import Search from './pages/Search';
import Searchmood from './pages/Searchmood';
import Petmusic from './pages/Petmusic';
import Account from './pages/Account';

const spotifyApi = new SpotifyWebApi();

class App extends React.Component {
  constructor() {
    super();
    const params = this.getHashParams();
    console.log(params);

    const token = params.access_token;

    if (token) {
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

  getHashParams() {
    var hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
    e = r.exec(q)
    while (e) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
      e = r.exec(q);
    }
    return hashParams;
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
          <Nav
            activeKey="/home"
            onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}>
            <Nav.Item>
              <Nav.Link href="/home">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="/Search" component={Search}>Search</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="/Searchmood" component={Searchmood}>Search Mood</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="/Petmusic" component={Petmusic}>Pet Music</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="/Account" component={Account}>Account</Nav.Link>
            </Nav.Item>
          </Nav>

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
          { this.state.loggedIn &&
            <button onClick={() => this.getNowPlaying()}>
              Check Now Playing
          </button>
          }
          <button onClick={() => this.pausePlayback()}>
              Pause
          </button>
          <button onClick={() => this.playPlayback()}>
              Play
          </button>
          <button onClick={() => this.startOrResumePlayback()}>
              Play Carly Rae Jepsen
          </button>
        </div>
      </div>
    );
  }
}

export default App;