import React from "react";
import { NavLink } from "react-router-dom";
import {
  BiBookAlt,

} from "react-icons/bi";
import "../styles/sidebar.css";
import { MdOutlineContactPhone } from "react-icons/md";
import { GiNetworkBars } from "react-icons/gi";
import { MdOutlineWork } from "react-icons/md";
import { HiUserGroup } from "react-icons/hi";

const Sidebar = () => {
  return (
    <div className="menu">
      <div className="logo">
        <BiBookAlt className="logo-icon" />
        <h2>QuickHelp</h2>
      </div>
      <div className="menu--list">
        <NavLink to="/" className="item" activeclassname="active">
          <GiNetworkBars className="icon" />
          Dashboard
        </NavLink>
        <NavLink to="/jobs" className="item" activeclassname="active">
          <MdOutlineWork className="icon" />
          Jobs
        </NavLink>
        <NavLink to="/employee" className="item" activeclassname="active">
          <HiUserGroup className="icon" />
          Workers
        </NavLink>
        <NavLink to="/contactus"
          className="item"
          activeclassname="active"
        >
          <MdOutlineContactPhone className="icon" />
          Contact Us
        </NavLink>
        <button className="item logout">
  Logout
</button>
      </div>
    </div>
   
  );
};

export default Sidebar;
