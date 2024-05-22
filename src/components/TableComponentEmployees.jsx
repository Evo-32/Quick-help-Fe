import React from 'react';
import '../styles/employee.css';

const TableComponentEmployees = ({ employees, onEdit, onDelete }) => {
  return (
    <div className='table-container'>
      <table className='employee-table'>
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
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td><img src={employee.profilePicture} alt="Profile" width="50" height="50" /></td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.email}</td>
              <td>{employee.phone}</td>
              <td>{employee.idCard}</td>
              <td>{employee.job}</td>
              <td>{employee.experience}</td>
              <td>{employee.min_salary}</td>
              <td>{employee.status}</td>
              <td>
                <button onClick={() => onEdit(employee.id)}>Edit</button>
                <button onClick={() => onDelete(employee.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponentEmployees;
