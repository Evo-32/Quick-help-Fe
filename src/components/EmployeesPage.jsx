import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { fetchEmployees, deleteEmployee } from '../api/employeeApi';
import TableComponentEmployees from './TableComponentEmployees';
import '../styles/employee.css';

const EmployeesPage = () => {
  const location = useLocation();
  const [employees, setEmployees] = useState([]);
  const [message, setMessage] = useState(location.state?.message || '');

  useEffect(() => {
    const getEmployees = async () => {
      try {
        const employeesData = await fetchEmployees();
        setEmployees(employeesData);
      } catch (error) {
        console.error('Error fetching employees:', error);
      }
    };
    getEmployees();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteEmployee(id);
      setEmployees(employees.filter(employee => employee.id !== id));
    } catch (error) {
      console.error('Error deleting employee:', error);
    }
  };

  const handleEdit = (id) => {
    // Navigate to edit page
  };

  return (
    <div className='content'>
      {message && <div className="alert alert-success">{message}</div>}
      <div className='content--header'>
        <h1 className="header--title">Employees</h1>
        <Link to="/employees/add" className="add-employee-button">Add Employee</Link>
      </div>
      <TableComponentEmployees employees={employees} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default EmployeesPage;
