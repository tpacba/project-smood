import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
// import Nav from 'react-bootstrap/Nav';
import Search from './pages/Search';
import Searchmood from './pages/Searchmood';
import Petmusic from './pages/Petmusic';
import Account from './pages/Account';
import Home from './pages/Home';
import Wrapper from "./components/Wrapper";


function App() {
  return (
    <Router>
      <div>
        {/* <Nav
          activeKey="/home"
          onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}>
          <Nav.Item>
            <Nav.Link href="/home">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="/Search" component={Search}>Search</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="/Searchmood" component={Searchmood}>Search Mood</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="/Petmusic" component={Petmusic}>Pet Music</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="/Account" component={Account}>Account</Nav.Link>
          </Nav.Item>
        </Nav> */}
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