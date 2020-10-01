import React from "react";
import SpotifyWebApi from "spotify-web-api-js";

const spotifyApi = new SpotifyWebApi();

class Account extends React.Component {
  state = {
    loggedIn: false,
    user_name: "",
    profile_image: "",
    device: [{
      name: "",
      type: "",
      is_active: false
    }]

  }

  componentDidMount() {
    this.handleToken();
    this.getUserInfo();
    this.getDevices();
  }

  handleToken = () => {
    const token = sessionStorage.getItem("token");
    if (token) {
      spotifyApi.setAccessToken(token);
      this.setState({ loggedIn: true })
    }
  }

  getUserInfo = () => {
    spotifyApi.getMe()
      .then(res => {
        this.setState({
          user_name: res.display_name,
          profile_image: res.images[0].url
        })
      })
      .catch(err => console.log(err))
  }

  getDevices = () => {
    spotifyApi.getMyDevices()
      .then(res => {
        const devices = res.devices.map(item => (
          {
            name: item.name,
            type: item.type,
            is_active: item.is_active
          }
        ))

        this.setState({
          device: devices
        })
      })
      .catch(err => console.log(err))
  }

  render() {
    console.log(this.state)
    return (
      <div>

      </div>
    );
  }
}

export default Account;