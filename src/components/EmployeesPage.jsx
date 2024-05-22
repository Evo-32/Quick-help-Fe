import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { fetchEmployees } from '../api/employeeApi';

const EmployeesPage = () => {
  const location = useLocation();
  const [employees, setEmployees] = useState([]);
  const [message, setMessage] = useState(location.state?.message || '');

  useEffect(() => {
    const getEmployees = async () => {
      try {
        const employeesData = await fetchEmployees();
        if (Array.isArray(employeesData)) {
          setEmployees(employeesData);
        } else {
          console.error('API did not return an array');
        }
      } catch (error) {
        console.error('Error fetching employees:', error);
      }
    };

    getEmployees();
  }, []);

  return (
    <div className='content'>
      {message && <div className="alert alert-success">{message}</div>}
      <div className='content--header'>
        <h1 className="header--title">Employees</h1>
        <Link to="/employees/add" className="add-employee-button">Add Employee</Link>
      </div>
      <table className="employee-table">
        <thead>
          <tr>
            <th>ID</th>
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
              <td>{employee.id}</td>
              <td>
                <img src={employee.profilePicture} alt={`${employee.firstName} ${employee.lastName}`} />
              </td>
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
                <Link to={`/employees/edit/${employee.id}`} className="edit-button">Edit</Link>
                <button onClick={() => handleDelete(employee.id)} className="delete-button">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeesPage;
