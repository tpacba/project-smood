import React from "react";
import "./SearchResults.css";

function SearchForm(props) {
  return (
    <div className="searchForm">
      <input
        style={{
          width: "100%",
          fontSize: 25,
          color: "grey",
          alignItems: "center",
          textAlign: "center",
          borderRadius: "5px",
        }}
        value={props.Search}
        onChange={props.handleInputChange}
        name="search"
        type="text"
        placeholder="Search by..."
      />
      <div
        style={{
          width: "100%",
          fontSize: 25,
          marginRight: "40px",
          color: "grey",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <select
          name="cars"
          id="cars"
          value={props.type}
          onChange={props.handleTypeInput}
        >
          <option value="track">Track</option>
          <option value="album">Album</option>
          <option value="artist">Artist</option>
          <option value="playlist">Playlist</option>
        </select>

        
          <button
            className="button1"
            type="submit"
            onClick={props.handleFormSubmit}
          >
            SEARCH
          </button>
        
      </div>
    </div>
  );
}

export default SearchForm;
