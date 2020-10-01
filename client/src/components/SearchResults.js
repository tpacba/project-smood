import React from "react";
import "./SearchResults.css";

function SearchResults(props) {
  return (
    <div className="card">
      {props.results.map((item) => (
        <div className="content">
          <ul>
            <li key={item.id} className="list-group-item">
              <img alt="" src={item.images[2].url} className="img-fluid" />
            </li>
            <li>
              <strong>Genre:</strong> {item.genres[1]}
            </li>
            <li>
              <strong>Followers:</strong> {item.followers.total}
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
}

export default SearchResults;
