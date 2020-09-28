let express = require('express')
let request = require('request')
let querystring = require('querystring')

let app = express()

let SPOTIFY_CLIENT_ID = "8c0cbc509fd94dab9d857c984575d67b";
let SPOTIFY_CLIENT_SECRET = "919d264b6c8b4b01b34d3070f6ddf6c1";

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
  console.log(`Listening on https://localhost:${port}/login to initiate authentication flow.`)
})