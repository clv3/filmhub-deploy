import React from "react";
import "./NavBar.css";

function NavBar() {
  return (
          <ul className="nav_ul">
            <li className="nav_li"><a href="/#">Home</a></li>
            <li className="nav_li"><a href="/reviews">Reviews</a></li>
            <li className="nav_li"><a href="Showings">Showings</a></li>
            <li className="nav_li"><a href="#">Trending</a></li>
          </ul>
  );
}

export default NavBar;
