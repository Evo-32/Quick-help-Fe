import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addEmployee } from '../api/employeeApi';

const FormComponentEmployees = () => {
  const navigate = useNavigate();
  const [employee, setEmployee] = useState({
    profilePicture: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    idCard: '',
    jobName: 'Housemaid',
    experience: '',
    min_salary: '',
    status: 'Retired',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setEmployee({ ...employee, profilePicture: file });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log('Submitting employee data:', employee);
      await addEmployee(employee);
      navigate('/employee', { state: { message: 'Employee added successfully!' } });
    } catch (error) {
      console.error('Error adding employee:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className='content'>
      <div className='content--header'>
        <h1 className="header--title">Add Employee</h1>
      </div>
      <form onSubmit={handleSubmit} className="employee-form">
        <div className="form-group">
          <label htmlFor="profilePicture">Profile Picture</label>
          <input 
            type="file" 
            id="profilePicture" 
            name="profilePicture" 
            onChange={handleFileChange} 
            accept="image/*"
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input 
            type="text" 
            id="firstName" 
            name="firstName" 
            value={employee.firstName} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input 
            type="text" 
            id="lastName" 
            name="lastName" 
            value={employee.lastName} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            value={employee.email} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="dateOfBirth">Date of Birth</label>
          <input 
            type="dateOfBirth" 
            id="dateOfBirth" 
            name="dateOfBirth" 
            value={employee.dateOfBirth} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input 
            type="tel" 
            id="phone" 
            name="phone" 
            value={employee.phone} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="idCard">ID Card</label>
          <input 
            type="text" 
            id="idCard" 
            name="idCard" 
            value={employee.idCard} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="JobName">Job Name</label>
          <input 
            type="text" 
            id="JobName" 
            name="JobName" 
            value={employee.JobName} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="experience">Experience</label>
          <input 
            type="text" 
            id="experience" 
            name="experience" 
            value={employee.experience} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="min_salary">Min Salary</label>
          <input 
            type="text" 
            id="min_salary" 
            name="min_salary" 
            value={employee.min_salary} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="status">Status</label>
          <select 
            id="status" 
            name="status" 
            value={employee.status} 
            onChange={handleChange} 
            required 
          >
            <option value="In Progress">In Progress</option>
            <option value="Retired">Retired</option>
            <option value="Hired">Hired</option>
          </select>
        </div>
        <button type="submit" className="save-button">Save</button>
      </form>
    </div>
  );
};

export default FormComponentEmployees;
