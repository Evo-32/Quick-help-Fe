import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchEmployees, deleteEmployee } from '../api/employeeApi';
import TableComponentEmployees from './TableComponentEmployees';
import '../styles/employee.css';

const EmployeesPage = () => {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const loadEmployees = async () => {
      try {
        const employeesData = await fetchEmployees();
        console.log('Employees Data:', employeesData); // Log the response data to see its structure
        if (Array.isArray(employeesData)) {
          setEmployees(employeesData);
        } else {
          console.error('API did not return an array');
        }
      } catch (error) {
        console.error('Error loading employees:', error);
      }
    };
    loadEmployees();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteEmployee(id);
      setEmployees(employees.filter((employee) => employee.id !== id));
    } catch (error) {
      console.error(`Error deleting employee with id ${id}:`, error);
    }
  };

  const handleAddEmployee = () => {
    navigate('/employees/add');
  };

  const handleEditEmployee = (id) => {
    navigate(`/employees/edit/${id}`);
  };

  return (
    <div className="content">
      <div className="content--header">
        <h1 className="header--title">Employees</h1>
        <button onClick={handleAddEmployee}>Add Employee</button>
      </div>
      <TableComponentEmployees data={employees} />
    </div>
  );
};

export default EmployeesPage;
