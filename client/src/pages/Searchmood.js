import React from "react";
import Slider from '../components/Slider';
import SpotifyWebApi from 'spotify-web-api-js';
import Login from '../components/Login';
import MusicPlayer from '../components/MusicPlayer/MusicPlayer'

const spotifyApi = new SpotifyWebApi();

class Searchmood extends React.Component {
  state = {
    loggedIn: false,
    value: "",
    mood: "",
    playlists: []
  }

  componentDidMount() {
    this.handleToken();
  }

  componentDidUpdate() {
    // const randomInt = Math.floor(Math.random() * Math.floor(this.state.playlists.length - 1))
    this.playPlaylist(this.state.playlists[0])
  }

  handleToken = () => {
    const token = sessionStorage.getItem("token");
    if (token) {
      spotifyApi.setAccessToken(token);
      this.setState({ loggedIn: true })
    }
  }

  handleChange = (event, newValue) => {
    this.setState(
      {
        value: newValue,
        mood: this.valueToMood(newValue)
      })
    this.searchPlaylist(this.state.mood)
  }

  searchPlaylist = (search) => {
    spotifyApi.search(
      search,
      ["playlist"]
    ).then(res => {
      console.log(res.playlists.items)
      this.setState({ playlists: res.playlists.items.map(item => (item.uri)) })
    })
  }

  playPlaylist = (uri) => {
    spotifyApi.play(
      {
        "context_uri": uri,
        "offset": {
          "position": 0
        },
        "position_ms": 0
      }
    )
  }

  valueToMood = (value) => {
    switch (value) {
      case 0: return "sleep";
      case 20: return "at home";
      case 40: return "party";
      case 60: return "workout";
      case 80: return "blues";
      case 100: return "metal";
      default: return "pop culture"
    }
  }

  render() {
    console.log(this.state)
    return (
      <div>
        {!this.state.loggedIn &&
          <Login></Login>
        }
        {this.state.loggedIn &&
          <center>
          <br/>
            <Slider
              handleChange={this.handleChange}
              value={this.state.value}
            />
            <MusicPlayer/>
          </center>
        }

      </div>
    );
  }
}

export default Searchmood;