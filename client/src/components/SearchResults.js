import React from "react";

function SearchResults(props) {
  return (
    <ul className="list-group search-results">
      {props.results.map((item) => (
        <li key={item.id} className="list-group-item">
            
          <img alt="" src={item.images[2].url} className="img-fluid" />
        </li>
      ))}
    </ul>
  );
}

export default SearchResults;
