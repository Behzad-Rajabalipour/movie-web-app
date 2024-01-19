import React, { Component } from 'react';
import style from "../styles/style.module.css";
import { Link } from 'react-router-dom';  // Importing Link for navigation

class Navbar extends Component {
    render() {
        return (
            // Navigation bar with styling from style.module.css
            <nav className={style["navbar-collapse"]}>
                {/* Unordered list for navigation items */}
                <ul className={style["navbar-nav"]}>
                    {/* Individual navigation item with Link for routing */}
                    <li className={style["nav-item"]}>
                        <Link className={style["nav-link"]} to="/">
                            Home
                        </Link>
                    </li>
                    {/* Individual navigation item for Movies */}
                    <li className={style["nav-item"]}>
                        <Link className={style["nav-link"]} to="/movies">
                            Movies
                        </Link>
                    </li>
                    {/* Individual navigation item for About Us */}
                    <li className={style["nav-item"]}>
                        <Link className={style["nav-link"]} to="/about-us">
                            About us
                        </Link>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;
