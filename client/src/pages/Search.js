import React from "react";
import SpotifyWebApi from 'spotify-web-api-js';

const spotifyApi = new SpotifyWebApi();


class Search extends React.Component {
  state = {
    search: "",
    results: [],
    error: ""
  };

  componentDidMount() {
    // const token = sessionStorage.getItem("token");

    // spotifyApi.setAccessToken(token);

    // spotifyApi.search(
    //   "roadhouse%20blues",
    //   ["track", "artist"]
    // ).then(res => console.log(res))
  }

  render() {
    return (
      <div>
      </div>
    );
  }
}

export default Search;