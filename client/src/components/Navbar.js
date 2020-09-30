import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Landanimsmall from '../components/Landanimsmall';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
});

export default function () {
    const classes = useStyles();

    return (
        <div>
        <Paper className={classes.root}>
            <Tabs
                indicatorColor="primary"
                textColor="primary"
                centered
            >
                <Landanimsmall></Landanimsmall>
                <Tab label="Home" href={"/"} />
                <Tab label="Search" href={"/search"} />
                <Tab label="Search Mood" href={"/search/mood"} />
                <Tab label="Pet Music" href={"/petmusic"} />
                <Tab label="Account" href={"/account"} />
            </Tabs>
        </Paper>
        </div>
    );
}
