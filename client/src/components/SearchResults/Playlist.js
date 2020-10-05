import React, { useEffect, useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import SpotifyWebApi from "spotify-web-api-js";

import "./SearchResults.css";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: 151,
  },
}));

function MediaControlCard(props) {
  const spotifyApi = new SpotifyWebApi();

  const token = sessionStorage.getItem("token");
  if (token) {
    spotifyApi.setAccessToken(token);
  }

  const playPlaylist = (uri) => {
    spotifyApi.play({
      "context_uri": uri,
      "offset": {
          "position": 0
      },
      "position_ms": 0
  })
  };

  const classes = useStyles();
  const theme = useTheme();

  const playlist = [];

  console.log(props.results);

  props.results.forEach((element) => {
    const newPlaylist = {
      description: "",
      playlist: "",
      playlist_image: "",
      track_length: "",
      owner: "",
      uri: "",
    };

    newPlaylist.description = element.description;
    newPlaylist.playlist = element.name;
    newPlaylist.playlist_image = element.images.length
      ? element.images[0].url
      : "";
    newPlaylist.owner = element.owner.display_name;
    newPlaylist.track_length = element.tracks.total;
    newPlaylist.uri = element.uri;

    playlist.push(newPlaylist);
  });

  console.log(playlist);

  return (
    <div>
      {playlist.map((item) => (
        <CardActionArea onClick={(event) => playPlaylist(item.uri)}>
          <Card key={item.uri} className={classes.root}>
            <CardActionArea>
              <div className={classes.details}>
                <CardContent className={classes.content}>
                  <Typography component="h5" variant="h5">
                    {item.playlist}
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    {item.description}
                  </Typography>
                  <Typography variant="subtitle2" color="textSecondary">
                    Created by {item.owner} - {item.track_length} songs
                  </Typography>
                </CardContent>
              </div>
            </CardActionArea>
            <CardMedia
              className={classes.cover}
              image={item.playlist_image}
              title={item.playlist}
            />
          </Card>
        </CardActionArea>
      ))}
    </div>
  );
}

export default MediaControlCard;
