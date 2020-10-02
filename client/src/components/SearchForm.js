import React from "react";
import "./SearchResults/SearchResults.css";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuList from '@material-ui/core/MenuList';
import MenuItem from "@material-ui/core/MenuItem";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const options = ["Track", "Album", "Artist", "Playlist"];

function SearchForm(props) {
  // Input
  const [name, setName] = React.useState("Composed TextField");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  //Menu options
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event) => {
    setAnchorEl(null);
  };

  const ITEM_HEIGHT = 48;

  return (
    <div>
      <div
        className="searchForm"
        style={{
          textAlign: "center",
        }}
      >
        <FormControl variant="outlined">
          <InputLabel htmlFor="component-outlined">Search...</InputLabel>
          <OutlinedInput
            id="component-outlined"
            value={props.Search}
            onChange={props.handleInputChange}
            label="Name"
          />
        </FormControl>

        <IconButton
          aria-label="more"
          aria-controls="long-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          <MoreVertIcon
            style={{
              marginTop: "1rem",
            }}
          />
        </IconButton>
        <Menu
          id="long-menu"
          anchorEl={anchorEl}
          keepMounted
          open={open}
          onClose={handleClose}
          onChange={props.handleTypeInput}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: "20ch",
            },
          }}
        >
          {options.map((option) => (
            <MenuItem
              data-value={option}
              key={option}
              data-my-value={option.value}
              selected={option === "Pyxis"}
              onClick={(event) => {
                props.handleTypeInput(event);
                handleClose();
              }}
            >
              {option}
            </MenuItem>
          ))}
        </Menu>

        <Button
          type="submit"
          onClick={props.handleFormSubmit}
          variant="contained"
          color="default"
          style={{
            marginTop: "1rem",
          }}
        >
          SEARCH for {props.type}
        </Button>
      </div>
    </div>
  );
}

export default SearchForm;
