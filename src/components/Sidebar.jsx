import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { BiBookAlt } from "react-icons/bi";
import "../styles/sidebar.css";
import { GiNetworkBars } from "react-icons/gi";
import { MdOutlineWork } from "react-icons/md";
import { HiUserGroup } from "react-icons/hi";
import { TbBrandBooking } from "react-icons/tb";
import { useAuth } from '../contexts/AuthContext';
import axios from "axios";

const Sidebar = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    axios.get("https://quickhelp-2.onrender.com/api/v1/auth/logout")
      .then((res) => {
        console.log(res.data);
        console.log("Logged out successfully");
        logout(); // Clear client-side authentication state
        navigate('/'); // Redirect to home page
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="menu">
      <div className="logo">
        <BiBookAlt className="logo-icon" />
        <h2>QuickHelp</h2>
      </div>
      <div className="menu--list">
        <NavLink to="/dashboard" className="item" activeClassName="active">
          <GiNetworkBars className="icon" />
          Dashboard
        </NavLink>
        <NavLink to="/jobs" className="item" activeClassName="active">
          <MdOutlineWork className="icon" />
          Jobs
        </NavLink>
        <NavLink to="/employees" className="item" activeClassName="active">
          <HiUserGroup className="icon" />
          Employees
        </NavLink>
        <NavLink to="/bookings" className="item" activeClassName="active">
          <TbBrandBooking className="icon" />
          Bookings
        </NavLink>
        <button className="item logout" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
