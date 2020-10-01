import React from "react";
import SpotifyWebApi from "spotify-web-api-js";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults"
import Login from '../components/Login'

const spotifyApi = new SpotifyWebApi();

class Search extends React.Component {
  state = {
    loggedIn: false,
    search: "",
    results: [],
    error: "",
  };

  componentDidMount() {
    this.handleToken();
  }

  handleToken = () => {
    const token = sessionStorage.getItem("token");
    if (token) {
      spotifyApi.setAccessToken(token);
      this.setState({ loggedIn: true })
    }
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
        {!this.state.loggedIn &&
          <Login></Login>
        }
        {this.state.loggedIn &&
          <div>
            <SearchForm
              handleFormSubmit={this.handleFormSubmit}
              handleInputChange={this.handleInputChange}
            />
            <SearchResults results={this.state.results} />
          </div>
        }
      </div>
    );
  }
}
export default Search;
