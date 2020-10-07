import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import SearchIcon from "@material-ui/icons/Search";
import Mood from "@material-ui/icons/SentimentSatisfiedAlt";
import API from "../utils/API";


//Spotify Icon
// npm install --save-dev @iconify/react @iconify/icons-mdi
import { Icon, InlineIcon } from "@iconify/react";
import spotifyIcon from "@iconify/icons-mdi/spotify";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function () {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  return (
    <div>
      <br></br>
      <br></br>

      <center>
        <Button
          variant="contained"
          size="large"
          color="default"
          onClick={() => {
            window.location.href = process.env.REACT_APP_LOGIN || "http://localhost:8888/api/"}}
        >
          <Icon icon={spotifyIcon} /> Login
        </Button>
      </center>

      <center>
        <Card
          className={classes.root}
          variant="outlined"
          style={{ width: "520px" }}
        >
          <CardContent>
            <Typography
              variant="body2"
              component="p"
              style={{ textAlign: "center", fontSize: "20px" }}
            >
              Set or search your mood music with SMood Player to enjoy.
            </Typography>
            <br></br>
            <Typography
              variant="body2"
              component="p"
              style={{ textAlign: "left", fontSize: "16px" }}
            >
              Click the "<SearchIcon />" button to select specific track, album,
              artist and playlist.
              <Typography
                variant="body2"
                component="p"
                style={{ textAlign: "left", fontSize: "16px" }}
              >
                Click the "<Mood />" button to have us play our list of music to
                cater your mood.
              </Typography>
              <br></br>
              <Typography
                variant="body2"
                component="p"
                style={{ textAlign: "center", fontSize: "12px" }}
              >
                Login with your Spotify Premium account to connect with this
                app!
              </Typography>
            </Typography>
          </CardContent>
        </Card>
      </center>
    </div>
  );
}
