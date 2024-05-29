import React, { useEffect, useState } from "react";
import axios from "axios";
import {Link, useNavigate} from 'react-router-dom'

const Employee = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate()

  const handleFetch = async () => {
    await axios({
      method: "get",
      url: "https://quickhelp-2.onrender.com/api/v1/employee/get",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((Response) => {
        console.log(Response.data);
        setData(Response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <div className="bg-white py-8 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h4 className="text-4xl font-bold mb-4">Our employees:</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {data.map((data, index) => (
            <article
              key={index}
              className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm"
            >
              <div className="flex justify-center">
                <img
                  alt=""
                  src={data.profilePicture.url}
                  className="h-56 w-56 object-cover rounded-full"
                />
              </div>
              <div className="p-3 text-sm flex-col gap-1">
                <p> FirstName: {data.firstName}</p>
                <p> LastName: {data.lastName}</p>
                <p> Job: {data.job}</p>
                <p>Experience {data.experience}</p>
                <p> Date of birth: {data.dateOfBirth}</p>
                <p> Min_salary: {data.min_salary}</p>
                <p>Status: {data.status}</p>
                <div onClick={()=>navigate(`/book/${data._id}`, {state:{data}})} > 
                <button  className="bg-purple-400  hover:bg-purple-600 rounded flex text-white p-2 mt-5">
                  Book
                </button>
                </div>
              </div>
            </article>
          ))}
        </div>
        <button className="bg-blue-400 rounded flex text-white p-2 mt-5">
          <a href="/register">Register as employee</a>
        </button>
      </div>
    </div>
  );
};

export default Employee;
