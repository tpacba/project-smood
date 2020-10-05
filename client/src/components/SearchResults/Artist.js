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
      "context_uri": uri
  })
  };

  const classes = useStyles();
  const theme = useTheme();

  const artist = [];

  console.log(props.results);

  props.results.forEach((element) => {
    const newArtist = {
      total_followers: "",
      genres: "",
      artist_image: "",
      artist: "",
      uri: "",
    };

    newArtist.total_followers = element.followers.total;
    newArtist.genres = element.genres.length ? element.genres.join(", ") : "";
    newArtist.artist_image = element.images.length ? element.images[0].url : "";
    newArtist.artist = element.name;
    newArtist.uri = element.uri;

    artist.push(newArtist);
  });

  console.log(artist);

  return (
    <div>
      {artist.map((item) => (
        <CardActionArea onClick={(event) => playPlaylist(item.uri)}>
          <Card key={item.uri} className={classes.root}>
            <CardActionArea>
              <div className={classes.details}>
                <CardContent className={classes.content}>
                  <Typography component="h5" variant="h5">
                    {item.artist}
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    Genres: {item.genres}
                  </Typography>
                  <Typography variant="subtitle2" color="textSecondary">
                    Followers: {item.total_followers}
                  </Typography>
                </CardContent>
              </div>
            </CardActionArea>
            <CardMedia
              className={classes.cover}
              image={item.artist_image}
              title={item.artist}
            />
          </Card>
        </CardActionArea>
      ))}
    </div>
  );
}

export default MediaControlCard;
