import React, { useEffect, useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import '../styles/employee.css';
import axios from 'axios';

const TableComponentEmployees = ({ employees, onEdit, onDelete }) => {
  const [fetch, setFetch] =useState([]);
  const handleFetch = async()=>{
    await axios({
      method:'GET',
      url:"https://quickhelp-2.onrender.com/api/v1/employee/get",

    }).then((response)=>{
      console.log(response.data.data);
      setFetch(response.data.data)
    }).catch((Error)=>{
      console.log(Error);
    })
  }
  useEffect(()=>{
    handleFetch()
  }, []);
  
  return (
    <div className="table-container">
      <table className="employee-table">
        <thead>
          <tr>
            <th>Profile Picture</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>ID Card</th>
            <th>Job</th>
            <th>Experience</th>
            <th>Min Salary</th>
            <th>Status</th>
            <th>Date of Birth</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {fetch.map((employee) => (
            <tr key={employee.id}>
              <td>
                <img src={`${employee.profilePicture}`} alt={`${employee.firstName} ${employee.lastName}`} className="profile-picture" />
              </td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.email}</td>
              <td>{employee.phone}</td>
              <td>{employee.idCard}</td>
              <td>{employee.JobName}</td>
              <td>{employee.experience}</td>
              <td>{employee.min_salary}</td>
              <td>{employee.status}</td>
              <td>{employee.dateOfBirth}</td>
              <td className="action-buttons">
                <button className="action-button edit-button" onClick={() => onEdit(employee.id)}>
                  <FaEdit />
                </button>
                <button className="action-button delete-button" onClick={() => onDelete(employee.id)}>
                  <MdDelete />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponentEmployees;
