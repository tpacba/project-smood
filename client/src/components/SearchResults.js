import React from "react";
import "./SearchResults.css";

function SearchResults(props) {
  // console.log(props.results[0].images)
  return (
    <div>
      {props.type === "artist" &&
        props.results.map((item) => (
          <div
            className="card"
            style={{
              width: "100%",
              fontSize: 25,
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <div className="content">
              <ul>
                <li key={item.id}>
                  {item.images.map((img, key) =>
                    key === 2 ? (
                      <img
                        href={item.uri}
                        key={img.url}
                        alt=""
                        src={img.url}
                        className="img-fluid"
                      />
                    ) : (
                      <div></div>
                    )
                  )}
                </li>
                <div
                  className="searchInfo"
                  style={{
                    fontSize: 25,
                  }}
                >
                  <li>
                    <strong>Genre:</strong> {item.genres[1]}
                  </li>
                  <li>
                    <strong>Followers:</strong> {item.followers.total}
                  </li>
                </div>
              </ul>
            </div>
          </div>
        ))}

      {props.type === "track" &&
        props.results.map((item) => (
          <div className="card">
            <div className="content">
              <ul>
                <li key={item.id} className="list-group-item">
                  {item.images.map((img, key) =>
                    key === 2 ? (
                      <img
                        key={img.url}
                        alt=""
                        src={img.url}
                        className="img-fluid"
                      />
                    ) : (
                      <div></div>
                    )
                  )}
                </li>
                <li>
                  <strong>Genre:</strong> {item.genres[1]}
                </li>
                <li>
                  <strong>Followers:</strong> {item.followers.total}
                </li>
              </ul>
            </div>
          </div>
        ))}
    </div>
  );
}

export default SearchResults;
