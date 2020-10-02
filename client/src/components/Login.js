import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

//Spotify Icon
// npm install --save-dev @iconify/react @iconify/icons-mdi
import { Icon, InlineIcon } from '@iconify/react';
import spotifyIcon from '@iconify/icons-mdi/spotify';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
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
        <Button variant="contained" size="large" color="default" onClick={() =>
            (window.location.href =
                process.env.REACT_APP_CALLBACK ||
                "http://localhost:8888/api/login")
        }>
            <Icon icon={spotifyIcon} /> Login
        </Button>

        <Card className={classes.root} variant="outlined">
            <CardContent>
                <Typography variant="body2" component="p">
                Have a Spotify Premium account running on another device to have full access      
                </Typography>
            </CardContent>
        </Card>
    </div>
    );
}