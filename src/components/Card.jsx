import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useFetch from "../api/useFetch";
import { MdOutlineContactPhone, MdOutlineWork } from "react-icons/md";
import { HiUserGroup } from "react-icons/hi";
import "../styles/content.css";
import axios from "axios";

const apiUrls = {
  jobs: "https://quickhelp-2.onrender.com/api/v1/jobs/getAll",
  workers: "https://quickhelp-2.onrender.com/api/v1/employee/get",
  contact: "https://api.example.com/contact",
};

const Courses = () => {
  const [totalJobCount, setTotalJobCount] = useState(null);

  useEffect(() => {
    const fetchTotalJobCount = async () => {
      try {
        const response = await axios.get(apiUrls.jobs);
        if (response.data.success) {
          setTotalJobCount(response.data.totalCount);
        } else {
          throw new Error("Failed to fetch total job count");
        }
      } catch (error) {
        console.error("Error fetching total job count:", error);
      }
    };

    fetchTotalJobCount();
  }, []);

  const courses = [
    {
      title: "Jobs",
      icon: <MdOutlineWork />,
      path: "/jobs",
      totalCount: totalJobCount,
    },
    {
      title: "Employers",
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
                  {item.totalCount && <p>Total Count: {item.totalCount}</p>}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    );
  };

  return <Card />;
};

export default Courses;
