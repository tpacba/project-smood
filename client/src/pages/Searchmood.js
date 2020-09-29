import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 400,
  },
  margin: {
    height: theme.spacing(20),
  },
}));

const marks = [
  {
    value: 0,
    label: 'Happy',
  },
  {
    value: 20,
    label: 'Sad',
  },
  {
    value: 40,
    label: 'Excited',
  },
  {
    value: 60,
    label: 'Energetic',
  },
  {
    value: 80,
    label: 'Relaxed',
  },
  {
    value: 100,
    label: 'Bored',
  },
];

function valuetext(value) {
  return `${value}Mood`;
}

function Searchmood() {
  const classes = useStyles();
  return (
    <div>
    <div className={classes.root}>
      <Typography id="discrete-slider-custom" gutterBottom>
        Choose your Mood
      </Typography>
      <Slider
        defaultValue={20}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-custom"
        step={20}
        valueLabelDisplay="off"
        marks={marks}
      />
    </div>
      

    </div>
  );
}

export default Searchmood;