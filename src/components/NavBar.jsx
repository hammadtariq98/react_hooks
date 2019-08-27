import { Link } from "react-router-dom";
import React from 'react';



class NavBar extends React.Component {
    render() {
        return (
          <nav>
            <div className="container">
              <div className="nav-bar">
                <Link to="/home">Home</Link>
                <Link to="/categories">Categories Menue</Link>
                <Link to="/contactus">Contact Us</Link>
                <Link to="/aboutus">About Us</Link>
              </div>
            </div>
          </nav>
        );
    }
}
export default NavBar;