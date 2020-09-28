require('dotenv').config()
let express = require('express')
let request = require('request')
let querystring = require('querystring')

let app = express()

let SPOTIFY_CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
let SPOTIFY_CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;

let redirect_uri =
  process.env.REDIRECT_URI ||
  'http://localhost:8888/callback'

app.get('/login', function (req, res) {
  res.redirect('https://accounts.spotify.com/authorize?' +
    querystring.stringify({
      response_type: 'code',
      client_id: SPOTIFY_CLIENT_ID,
      scope: 'user-read-private user-read-email user-read-playback-state user-modify-playback-state',
      redirect_uri
    }))
})

app.get('/callback', function (req, res) {
  let code = req.query.code || null
  let authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    form: {
      code: code,
      redirect_uri,
      grant_type: 'authorization_code'
    },
    headers: {
      'Authorization': 'Basic ' + (new Buffer(
        SPOTIFY_CLIENT_ID + ':' + SPOTIFY_CLIENT_SECRET
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

let port = process.env.PORT || 8888
app.listen(port, function() {
  console.log(`Listening on ${port}. Go to /login to initiate authentication flow.`)
})