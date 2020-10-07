require('dotenv').config()
const path = require("path");
let request = require('request');
let querystring = require('querystring');

const router = require("express").Router();

// let SPOTIFY_CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
// let SPOTIFY_CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;

let redirect_uri =
    process.env.REDIRECT_URI ||
    'http://localhost:8888/api/callback';

router.route('/login')
    .get(function (req, res) {
        console.log("Going to redirect /login");
        // res.setHeader("Content-Type", "text/html");
        res.redirect('https://accounts.spotify.com/authorize?' +
            querystring.stringify({
                response_type: 'code',
                client_id: process.env.SPOTIFY_CLIENT_ID,
                scope: 'user-read-private user-read-email user-read-playback-state user-modify-playback-state user-read-private user-read-private',
                redirect_uri: redirect_uri
            }))
    })

router.route('/callback')
    .get(function (req, res) {
        console.log("Going to redirect /callback");
        let code = req.query.code || null
        let authOptions = {
            url: 'https://accounts.spotify.com/api/token',
            form: {
                code: code,
                redirect_uri: process.env.REDIRECT_URI,
                grant_type: 'authorization_code'
            },
            headers: {
                'Authorization': 'Basic ' + (new Buffer(
                    process.env.SPOTIFY_CLIENT_ID + ':' + process.env.SPOTIFY_CLIENT_SECRET
                ).toString('base64'))
            },
            json: true
        }
        request.post(authOptions, function (error, response, body) {
            var access_token = body.access_token;
            var refresh_token = body.access_token;
            let uri = process.env.FRONTEND_URI || 'http://localhost:3000'
            res.redirect(uri + '/#' + querystring.stringify({
                access_token: access_token,
                refresh_token: refresh_token
            }))
        })
    })

router.use(function (req, res) {
    res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;
