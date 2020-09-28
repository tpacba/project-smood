import React from "react";
import { Nav } from 'react-bootstrap';


function Navbar() {

    return (
        <Nav
            activeKey="/"
        // onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        >
            <Nav.Item>
                <Nav.Link href="/">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/search">Search</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/search/mood">Search Mood</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/petmusic">Pet Music</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/account">Account</Nav.Link>
            </Nav.Item>
        </Nav>
    )
}

export default Navbar;