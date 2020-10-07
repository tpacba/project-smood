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
    render_results: false
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
    console.log(event.target.value)
    this.setState({ search: event.target.value });
  };

  handleTypeInput = (event) => {
    // console.log(event.currentTarget.dataset.value.toLowerCase())
    this.setState({
      type: event.currentTarget.dataset.value.toLowerCase(),
      render_results: false
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    // console.log(this.state.type)
    spotifyApi
      .search(this.state.search, [this.state.type])
      .then((res) => {
        this.setState({ 
          results: res[this.state.type + "s"].items,
          render_results: true
        });
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
              type={this.state.type}
              handleFormSubmit={this.handleFormSubmit}
              handleInputChange={this.handleInputChange}
              handleTypeInput={this.handleTypeInput}
            />
            {this.state.render_results ? (
              <SearchResults type={this.state.type} results={this.state.results} />
            ) : (<div></div>)}
          </div>
        )}
      </div>
    );
  }
}
export default Search;
