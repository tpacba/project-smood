import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Search from './pages/Search';
import Searchmood from './pages/Searchmood';
import Account from './pages/Account';
import Wrapper from './components/Wrapper';
import Navbar from './components/Navbar';
import SmoodB from './images/smoodbackground.jpg';


class App extends React.Component {
  constructor() {
    super();
    const params = this.getHashParams();

    if (params.access_token) {
      sessionStorage.setItem("token", params.access_token);
    }
  }
  getHashParams() {
    var hashParams = {};
    var e,
      r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
    e = r.exec(q);
    while (e) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
      e = r.exec(q);
    }
    return hashParams;
  }

  render() {
    return (
    
      <Router>
        <div 
        style={{ 
          flex: "1", 
          flexDirection: "row", 
          alignItems: "center", 
          backgroundImage: `url(${SmoodB})`, 
          backgroundSize: "cover", 
          backgroundRepeat: "no-repeat",  
          width: "100%",
          backgroundPosition: "center",
          padding: "0",
          border: "0"
          }}>
            
          <Navbar />
          <Wrapper>
            <Route exact path="/" component={Searchmood} />
            <Route exact path="/account" component={Account} />
            <Route exact path="/search" component={Search} />
          </Wrapper>
        </div>
      </Router>
    );
  }
}

export default App;