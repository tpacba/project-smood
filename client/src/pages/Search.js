import React from "react";

import SpotifyWebApi from "spotify-web-api-js";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults"

const spotifyApi = new SpotifyWebApi();

class Search extends React.Component {
  state = {
    search: "",
    results: [],
    error: "",
  };

  componentDidMount() {
    const token = sessionStorage.getItem("token");
    spotifyApi.setAccessToken(token);
    // console.log(this.state)
  }

  handleInputChange = (event) => {
    this.setState({ search: event.target.value });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    spotifyApi.search(this.state.search, ["track", "artist"])
      .then((res) => {
        console.log(res)
        this.setState({ results: res.artists.items });
      })
      .catch(err => this.setState({ error: err.message }));
  };

  render() {
    console.log(this.state)
    return (
      <div>
        <SearchForm
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />

        <SearchResults results={this.state.results} />
      </div>
    );
  }
}
export default Search;
