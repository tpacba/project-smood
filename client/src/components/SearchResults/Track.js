import React, { useEffect, useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

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
    const classes = useStyles();
    const theme = useTheme();

    const track = [];

    console.log(props.results)

    props.results.forEach(element => {

        const newTrack = {
            artist: "",
            song: "",
            album: "",
            album_image: "",
            uri: ""
        }

        newTrack.artist = element.artists.map(item => (item.name)).join(", ");
        newTrack.song = element.name;
        newTrack.album = element.album.name;
        newTrack.album_image = element.album.images[1].url;
        newTrack.uri = element.uri;

        track.push(newTrack)
    })

    console.log(track)

    // const newArtistList = props.results.map(item => {
    //     const array = {};
    //     item.artists.forEach(element => {
    //         array.push(element.name)
    //     });
    //     return array;
    // })

    return (
        <div>
            {track.map(item => (
                <Card key={item.uri} className={classes.root}>
                    <div className={classes.details}>
                        <CardContent className={classes.content}>
                            <Typography component="h5" variant="h5">
                                {item.song}
                    </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                                {item.artist}
                    </Typography>
                        </CardContent>
                    </div>
                    <CardMedia
                        className={classes.cover}
                        image={item.album_image}
                        title={item.album}
                    />
                </Card>
            ))}
        </div>
    );
}


export default MediaControlCard;
