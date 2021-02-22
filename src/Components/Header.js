import React from "react";
import menuicon from "../assets/images/menuicon.webp";

function Header() {
  const [open, setOpen] = React.useState(false);
  function handleMenu() {
    setOpen(!open);
  }
  return (
    <>
      <div
        className={`mobile_nav_container ${open ? "active_mobile_menu" : ""}`}
      >
        <a href="">Popular</a>
        <a href="">Most Visited</a>
        <a href="">Blogs Entries</a>
        <a href=""> Our Services</a>
        <a href="">Contact Us</a>
      </div>
      <div className="container-fluid">
        <div className="mobile_nav">
          <div className="navbar_title mobile_logo">Venue</div>
          <div className="menuicon" onClick={handleMenu}>
            <img src={menuicon} width="70px" alt="" />
          </div>
        </div>
        <div className="desktop_nav">
          <p className="navbar_title">Venue</p>
          <ul className="nav justify-content-center nav_items align-items-center">
            <li className="nav-item ">
              <a className="nav-link" href="#">
                Popular
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Most Visited
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Blogs Entries
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Our Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
