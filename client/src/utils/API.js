import axios from 'axios';

let querystring = require('querystring');

export default {
    login: function() {
        // return axios.get("/api/login")
        console.log("Going to redirect /login");

        window.location.href = 'https://accounts.spotify.com/authorize?' +
        querystring.stringify({
            response_type: 'code',
            client_id: process.env.SPOTIFY_CLIENT_ID,
            scope: 'user-read-private user-read-email user-read-playback-state user-modify-playback-state user-read-private user-read-private',
            redirect_uri: "https://projectsmood.herokuapp.com/api/callback"
        })
    }
}