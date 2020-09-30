import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Search from './pages/Search';
import Searchmood from './pages/Searchmood';
import Petmusic from './pages/Petmusic';
import Account from './pages/Account';
import Home from './pages/Home';
import Wrapper from './components/Wrapper';
import Navbar from './components/Navbar';

class App extends React.Component {
  constructor() {
    super();
    const params = this.getHashParams();

    if (params.access_token) {
      sessionStorage.setItem("token", params.access_token)
    }
  }
  getHashParams() {
    var hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
    e = r.exec(q)
    while (e) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
      e = r.exec(q);
    }
    return hashParams;
  }
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Wrapper>
            <Route exact path="/" component={Home} />
            <Route exact path="/account" component={Account}/>
            <Route exact path="/petmusic" component={Petmusic}/>
            <Route exact path="/search" component={Search}/>
            <Route exact path="/search/mood" component={Searchmood}/>
          </Wrapper>
        </div>
      </Router>
    );
  }
}

export default App;