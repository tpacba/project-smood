import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Landanimsmall from '../components/Landanimsmall';
import HouseIcon from '@material-ui/icons/House';
import SearchIcon from '@material-ui/icons/Search';
import Mood from '@material-ui/icons/SentimentSatisfiedAlt';
import Account from '@material-ui/icons/AccountBox';

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
        <center><Landanimsmall/></center>
    
            <Tabs
                aligncontent="center"
                indicatorColor="primary"
                textColor="primary"
                centered
            >
                <a href={"/"}><HouseIcon 
                    style={{ fontSize: 25, marginRight:'40px', color:'grey'}} 
                    label="Home" 
                    /></a>
                <a href={"/search"}><SearchIcon 
                    style={{ fontSize: 25, marginRight:'40px', color:'grey'}} 
                    label="Search" 
                    /></a>
                <a href={"/search/mood"}><Mood 
                    style={{ fontSize: 25, marginRight:'40px', color:'grey'}} 
                    label="Search Mood" 
                    /></a>
                <a href={"/account"}><Account
                    style={{ fontSize: 25, marginRight:'40px', color:'grey'}} 
                    label="Account" 
                    /></a>    
            </Tabs>
        </Paper>
        </div>
    );
}
