import React from "react";
import Slider from '../components/Slider';
import SpotifyWebApi from 'spotify-web-api-js';

const spotifyApi = new SpotifyWebApi();



class Searchmood extends React.Component {
  state = {
    value: "",
    mood: "",
    playlists: []
  }

  componentDidMount() {
    const token = sessionStorage.getItem("token");
    spotifyApi.setAccessToken(token);
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
      this.setState({ playlists: res.playlists.items })
      this.playPlaylist(res.playlists.items[0].uri)
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
      case 0: return "upbeat";
      case 20: return "down";
      case 40: return "angry";
      case 60: return "energetic";
      case 80: return "peaceful";
      case 100: return "chill";
      default: return "happy"
    }
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <center>
          <Slider
            handleChange={this.handleChange}
            value={this.state.value}
          />
        </center>
      </div>
    );
  }
}

export default Searchmood;