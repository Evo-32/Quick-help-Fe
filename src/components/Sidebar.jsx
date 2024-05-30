import React from "react";
import { NavLink } from "react-router-dom";
import {
  BiBookAlt,

} from "react-icons/bi";
import "../styles/sidebar.css";

import { GiNetworkBars } from "react-icons/gi";
import { MdOutlineWork } from "react-icons/md";
import { HiUserGroup } from "react-icons/hi";
import { TbBrandBooking } from "react-icons/tb";

const Sidebar = () => {
  return (
    <div className="menu">
      <div className="logo">
        <BiBookAlt className="logo-icon" />
        <h2>QuickHelp</h2>
      </div>
      <div className="menu--list">
        <NavLink to="/dashboard" className="item" activeclassname="active">
          <GiNetworkBars className="icon" />
          Dashboard
        </NavLink>
        <NavLink to="/jobs" className="item" activeclassname="active">
          <MdOutlineWork className="icon" />
          Jobs
        </NavLink>
        <NavLink to="/employees" className="item" activeclassname="active">
          <HiUserGroup className="icon" />
          Employees
        </NavLink>
        <NavLink to="/bookings"
          className="item"
          activeclassname="active"
        >
          <TbBrandBooking className="icon" />
          Bookings
        </NavLink>
        <button className="item logout">
  Logout
</button>
      </div>
    </div>
   
  );
};

export default Sidebar;
