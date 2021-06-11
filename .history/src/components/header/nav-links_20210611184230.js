import React from "react"
import { Link } from "gatsby"

const NavLinks = ({ extraClassName }) => {
  // const handleDropdownStatus = (e) => {
  //   let clickedItem = e.currentTarget.parentNode;
  //   clickedItem.querySelector(".dropdown-list").classList.toggle("show");
  // };
  return (
    <ul className={`main-menu__list ${extraClassName}`}>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/#">Institucional</Link>
      </li>
      <li>
        <Link to="/#">Como colaborar</Link>
      </li>
      <li>
        <Link to="/#">Casas de Acolhimento</Link>
      </li>
      <li>
        <Link to="/transparencia">Transparência</Link>
      </li>
      {/* <li className="dropdown">
        <Link to="/events">Events</Link>
        <button aria-label="dropdown toggler" onClick={handleDropdownStatus}>
          <i className="fa fa-angle-down"></i>
        </button>
        <ul className="dropdown-list">
          <li>
            <Link to="/events">Events</Link>
          </li>
          <li>
            <Link to="/event-details">Event Details</Link>
          </li>
        </ul>
      </li> */}
      {/* <li className="dropdown">
        <Link to="/news">News</Link>
        <button aria-label="dropdown toggler" onClick={handleDropdownStatus}>
          <i className="fa fa-angle-down"></i>
        </button>
        <ul className="dropdown-list">
          <li>
            <Link to="/news">News</Link>
          </li>
          <li>
            <Link to="/news-details">News Details</Link>
          </li>
        </ul>
      </li> */}
      {/* <li className="dropdown">
        <Link to="#">Pages</Link>
        <button aria-label="dropdown toggler" onClick={handleDropdownStatus}>
          <i className="fa fa-angle-down"></i>
        </button>
        <ul className="dropdown-list">
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/volunteers">Volunteers</Link>
          </li>
          <li>
            <Link to="/become-volunteer">Become a Volunteer</Link>
          </li>
          <li>
            <Link to="/gallery">Gallery</Link>
          </li>
        </ul>
      </li> */}
      <li>
        <Link to="/contact">Contato</Link>
      </li>
      <li className="search-btn search-toggler">
        <span>
          <i className="azino-icon-magnifying-glass"></i>
        </span>
      </li>
    </ul>
  )
}

export default NavLinks
