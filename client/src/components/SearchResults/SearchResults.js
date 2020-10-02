import React from "react";
import "./SearchResults.css";
import Track from './Track';
import Album from './Album';
import Artist from './Artist'
import Playlist from './Playlist'

function SearchResults(props) {
  return (
    <div>

      {props.type === "track" &&
        <Track
          results={props.results}
        ></Track>
      }
      {props.type === "album" &&
        <Album
          results={props.results}
        ></Album>
      }
      {props.type === "artist" &&
        <Artist
          results={props.results}
        ></Artist>
      }
      {props.type === "playlist" &&
        <Playlist
          results={props.results}
        ></Playlist>
      }


      {/* {props.type === "artist" &&
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
        ))} */}




      {/* {props.type === "track" &&
        props.results.map((item) => (
          <div>{JSON.stringify(item)}</div>

        //   <div className="card">
        //     <div className="content">
        //       <ul>
        //         <li key={item.id} className="list-group-item">
        //           {item.images.map((img, key) =>
        //             key === 2 ? (
        //               <img
        //                 key={img.url}
        //                 alt=""
        //                 src={img.url}
        //                 className="img-fluid"
        //               />
        //             ) : (
        //                 <div></div>
        //               )
        //           )}
        //         </li>
        //         <li>
        //           <strong>Genre:</strong> {item.genres[1]}
        //         </li>
        //         <li>
        //           <strong>Followers:</strong> {item.followers.total}
        //         </li>
        //       </ul>
        //     </div>
        //   </div>
        // ))
        } */}
    </div>
  );
}

export default SearchResults;
