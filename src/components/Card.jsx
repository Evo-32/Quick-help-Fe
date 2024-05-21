import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../api/useFetch";
import { MdOutlineContactPhone, MdOutlineWork, MdReviews } from "react-icons/md";
import { HiUserGroup } from "react-icons/hi";
import "../styles/content.css";

const apiUrls = {
  jobs: "https://api.example.com/jobs",
  workers: "https://quickhelp-2.onrender.com/api/v1/employee/get",
  contact: "https://api.example.com/contact",
  review: "https://api.example.com/review",
};

const courses = [
  {
    title: "Jobs",
    icon: <MdOutlineWork />,
    apiKey: "jobs",
    path: "/jobs",
  },
  {
    title: "Workers",
    icon: <HiUserGroup />,
    apiKey: "workers",
    path: "/employee",
  },
  {
    title: "Contact Us",
    icon: <MdOutlineContactPhone />,
    apiKey: "contact",
    path: "/contactus",
  },
  {
    title: "Review",
    icon: <MdReviews />,
    apiKey: "review",
    path: "/reviews",
  },
];

const Card = () => {
  return (
    <div className="card-container">
      {courses.map((item, index) => {
        const { data, loading, error } = useFetch(apiUrls[item.apiKey]);

        return (
          <Link to={item.path} key={index} className="card-link">
            <div className="card">
              <div className="card--cover">{item.icon}</div>
              <div className="card--title">
                <h2>{item.title}</h2>
                {loading && <p>Loading...</p>}
                {error && <p>Error loading data</p>}
                {data && <p>{data.message || `Data: ${JSON.stringify(data)}`}</p>}
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Card;

