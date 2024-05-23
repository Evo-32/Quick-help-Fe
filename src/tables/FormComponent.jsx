import React from 'react';

const FormComponent = ({ jobs, handleChange, handleSave, handleFileChange }) => {
  return (
    <form onSubmit={handleSave} className="job-form">
      <div className="form-group">
        <label htmlFor="picture">Job Picture</label>
        <input 
          type="file" 
          id="picture" 
          name="picture" 
          onChange={handleFileChange} 
          accept="image/*"
          required 
        />
      </div>
      <div className="form-group">
        <label htmlFor="name">Job Name</label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          value={jobs.JobName} 
          onChange={handleChange} 
          required 
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Job Description</label>
        <textarea 
          id="description" 
          name="description" 
          value={jobS.Description} 
          onChange={handleChange} 
          required 
        ></textarea>
      </div>
      <button type="submit" className="save-button">Save</button>
    </form>
  );
};

export default FormComponent;
