import React from "react";
import SpotifyWebApi from "spotify-web-api-js";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults/SearchResults"
import Login from '../components/Login'

const spotifyApi = new SpotifyWebApi();

class Search extends React.Component {
  state = {
    loggedIn: false,
    search: "",
    results: [],
    error: "",
    type: "track",
  };

  componentDidMount() {
    this.handleToken();
  }

  handleToken = () => {
    const token = sessionStorage.getItem("token");
    if (token) {
      spotifyApi.setAccessToken(token);
      this.setState({ loggedIn: true });
    }
  };

  handleInputChange = (event) => {
    this.setState({ search: event.target.value });
  };

  handleTypeInput = (event) => {
    this.setState({ type: event.target.value });

    console.log("Hello")
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.type)
    spotifyApi
      .search(this.state.search, [this.state.type])
      .then((res) => {
        this.setState({ results: res[this.state.type + "s"].items });
      })
      .catch((err) => this.setState({ error: err.message }));
  };

  render() {
    return (
      <div>
        {!this.state.loggedIn && <Login></Login>}
        {this.state.loggedIn && (
          <div>
            <SearchForm
              handleFormSubmit={this.handleFormSubmit}
              handleInputChange={this.handleInputChange}
              handleTypeInput={this.handleTypeInput}
            />
            {this.state.results ? (
              <SearchResults type={this.state.type} results={this.state.results} />
            ) : (<div></div>)}
          </div>
        )}
      </div>
    );
  }
}
export default Search;
