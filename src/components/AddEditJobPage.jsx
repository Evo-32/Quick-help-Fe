import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import FormComponent from '../tables/FormComponent';
import { addJob, updateJob, fetchJobs } from '../api/jobsApi';


const AddEditJobPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [job, setJob] = useState({ picture: '', name: '', description: '' });
  const [data, setData] = useState([]);

  useEffect(() => {
    const loadJobs = async () => {
      const jobs = await fetchJobs();
      setData(jobs);
    };
    loadJobs();
  }, []);

  useEffect(() => {
    if (id) {
      const jobToEdit = data.find((job) => job.id === parseInt(id));
      if (jobToEdit) setJob(jobToEdit);
    }
  }, [id, data]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJob({ ...job, [name]: value });
  };

  const handleFileChange = (e) => {
    setJob({ ...job, picture: e.target.files[0] });
  };

  const handleSave = async (e) => {
    e.preventDefault();
    if (id) {
      await updateJob(id, job);
    } else {
      await addJob(job);
    }
    navigate('/jobs');
  };

  return (
    <div className='content'>
    <div className='content--header'>
      <h1 className='header--title absolute top-12 left-30 '>{id ? 'Edit Job' : 'Add Job'}</h1>
      <FormComponent job={job} handleChange={handleChange} handleFileChange={handleFileChange} handleSave={handleSave} />
      </div>
    </div>
  );
};

export default AddEditJobPage;
