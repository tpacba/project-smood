import React from 'react'
// import Button from "@material-ui/core/Button";

function SearchForm(props) {
    return (
      <div>
        <input
          value={props.Search}
          onChange={props.handleInputChange}
          name="search"
          type="text"
          placeholder="Search by..."
        />
        <button
          type="submit"
          onClick={props.handleFormSubmit}>
          SEARCH
        </button>
      </div>
    );
}

export default SearchForm;
