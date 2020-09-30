import React from "react";
import { Provider } from "react-redux";
import store from "../store/store";
import AppRouter from "../routers/AppRouter";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../src/styles.css";

function Search() {

  // startOrResumePlayback() {
  //   var song = {
  //     context_uri: "spotify:album:5ht7ItJgpBH7W6vJ5BqpPr",
  //     offset: {
  //       position: 5,
  //     },
  //     position_ms: 0,
  //   };
  //   console.log(spotifyApi.play(song));
  //   spotifyApi
  //     .play(song)
  //     .catch((err) => console.log(err));
  // }

  
  return (
    // (
      <Provider store={store}>
        <AppRouter />
      </Provider>
    // ),
    // (
    //   <div>
    //     <div id="loader" class="hide"></div>
    //   </div>
    // )
  );
}

export default Search;