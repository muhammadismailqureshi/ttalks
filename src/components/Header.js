import React from "react";
import '../styles.css';

const Header = ()=>(
    <header>
        <h1>Welcome to TTalks</h1>
        <nav>
            <ul>
                <li><a href="/">Home</a> </li>
                <li><a href="/">About</a> </li>
                <li><a href="/">Contact</a> </li>
            </ul>
        </nav>
    </header>
);

export default Header;