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


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={Home} />
          <Route exact path="/account" component={Account} />
          <Route exact path="/petmusic" component={Petmusic} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/search/mood" component={Searchmood} />
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;