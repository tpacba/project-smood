import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Landanimsmall from '../components/Landanimsmall';
import SearchIcon from '@material-ui/icons/Search';
import Mood from '@material-ui/icons/SentimentSatisfiedAlt';
import Account from '@material-ui/icons/AccountBox';
import '../App.css';

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
                <a className="Iconbuttons" href={"/search"}><SearchIcon 
                    style={{ fontSize: 45, minWidth:'120px', color:'4C4C4B'}} 
                    label="Search" 
                    /></a>
                <a className="Iconbuttons" href={"/"}><Mood 
                    style={{ fontSize: 45, minWidth:'120px', color:'4C4C4B'}} 
                    label="Search Mood" 
                    /></a>
                <a className="Iconbuttons" href={"/account"}><Account
                    style={{ fontSize: 45, minWidth:'120px', color:'4C4C4B'}} 
                    label="Account" 
                    /></a>    
            </Tabs>
        </Paper>
        </div>
    );
}
