import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addEmployee } from '../api/employeeApi';

const FormComponentEmployees = () => {
  const navigate = useNavigate(); // Use useNavigate hook
  const [employee, setEmployee] = useState({
    profilePicture: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    idCard: '',
    job: 'Housemaid', // Default value: Housemaid
    experience: '',
    minSalary: '',
    status: 'Retired' // Default value: Retired
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleFileChange = (e) => {
    setEmployee({ ...employee, profilePicture: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addEmployee(employee);
      navigate('/employees'); // Use navigate function to redirect to /employees
    } catch (error) {
      console.error('Error adding employee:', error);
      // Handle error state here
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
          <label htmlFor="job">Job</label>
          <select 
            id="job" 
            name="job" 
            value={employee.job} 
            onChange={handleChange} 
            required 
          >
            <option value="Housemaid">Housemaid</option>
            <option value="Personal trainer">Personal trainer</option>
            <option value="Gatekeeper">Gatekeeper</option>
            <option value="BabySitter">Baby Sitter</option>
            <option value="Plumber">Plumber</option>
            <option value="Gardener">Gardener</option>
            <option value="Home chef">Home chef</option>
            <option value="Caregiver">Caregiver</option>
            <option value="Home Tutor">Home Tutor</option>
          </select>
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
          <label htmlFor="minSalary">Min Salary</label>
          <input 
            type="text" 
            id="minSalary" 
            name="minSalary" 
            value={employee.minSalary} 
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
