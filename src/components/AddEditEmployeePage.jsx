import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { addEmployee, updateEmployee, fetchEmployees } from '../api/employeeApi';
import FormComponentEmployees from './FormComponentEmployees';

const AddEditWorkerPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [employee, setEmployee] = useState({ profilePicture: '', name: '', position: '' });
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const loadEmployees = async () => {
      try {
        const fetchedEmployees = await fetchEmployees();
        setEmployees(fetchedEmployees);
      } catch (error) {
        console.error('Error loading employees:', error);
      }
    };
    loadEmployees();
  }, []);

  useEffect(() => {
    if (id) {
      const employeeToEdit = employees.find((e) => e.id === parseInt(id));
      if (employeeToEdit) setEmployee(employeeToEdit);
    }
  }, [id, employees]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleFileChange = (e) => {
    setEmployee({ ...employee, profilePicture: e.target.files[0] });
  };

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      if (id) {
        await updateEmployee(id, employee);
      } else {
        await addEmployee(employee);
      }
      navigate('/employee');
    } catch (error) {
      console.error('Error saving employee:', error);
    }
  };

  return (
    <div className="content">
      <div className="content--header">
        <h1 className="header--title">{id ? 'Edit Employee' : 'Add Employee'}</h1>
        <FormComponentEmployees
          employee={employee}
          handleChange={handleChange}
          handleFileChange={handleFileChange}
          handleSubmit={handleSave}
        />
      </div>
    </div>
  );
};

export default AddEditWorkerPage;
