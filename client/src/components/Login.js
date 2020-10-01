import React from 'react';
import Button from '@material-ui/core/Button';

export default function () {
    return (
        <Button variant="contained" size="large" color="default" onClick={() =>
            (window.location.href =
                process.env.REACT_APP_CALLBACK ||
                "http://localhost:8888/api/login")
        }>
            Login to Spotify
        </Button>
    )
}