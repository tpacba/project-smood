import React from "react";
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Angry from '@material-ui/icons/Whatshot';
import Upbeat from '@material-ui/icons/Mood';
import Energetic from '@material-ui/icons/FlashOn';
import Peaceful from '@material-ui/icons/AirlineSeatFlat';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import Down from '@material-ui/icons/SentimentVeryDissatisfied';

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
    label: <Peaceful/>,
  },
  {
    value: 20,
    label: <AcUnitIcon/>,
  },
  {
    value: 40,
    label: <Upbeat/>,
  },
  {
    value: 60,
    label: <Energetic/>,
  },
  {
    value: 80,
    label: <Down/>,
  },
  {
    value: 100,
    label: <Angry/>,
  },
];

const PrettoSlider = withStyles({
  root: {
    color: '#52af77',
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: '#285f00',
    border: '2px solid currentColor',
    marginTop: -8,
    marginLeft: -12,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);

function valuetext(value) {
  return `${value}Mood`;
}

function Slidershort(props) {
  const classes = useStyles();

  return (
    <div>
      {/* <div className={classes.root}>
        <Typography
          id="discrete-slider-custom"
          style={{ textAlign: 'center' }} gutterBottom>
          Choose your Mood
      </Typography>
        <Slider
          defaultValue={props.value}
          getAriaValueText={valuetext}
          aria-labelledby="discrete-slider-custom"
          step={20}
          valueLabelDisplay="off"
          marks={marks}
          style={{ position: 'relative' }}
          onChangeCommitted={props.handleChange}
        />
        
      </div> */}
      <PrettoSlider
        valueLabelDisplay="off"
        aria-label="pretto slider"
        step={20}
        marks={marks}
        defaultValue={props.value} 
        onChangeCommitted={props.handleChange}
        />
    </div>
  );
}

export default Slidershort;