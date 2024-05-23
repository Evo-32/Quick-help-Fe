import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TableComponent from '../tables/TableComponent';
import { fetchJobs, deleteJob } from '../api/jobsApi';
import '../styles/jobs.css';

const JobsPage = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const loadJobs = async () => {
      try {
        const jobs = await fetchJobs();
        setData(jobs);
      } catch (error) {
        console.error('Error loading jobs:', error);
      }
    };
    loadJobs();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteJob(id);
      setData(data.filter((jobs) => jobs.id !== id));
    } catch (error) {
      console.error('Error deleting job:', error);
    }
  };

  const handleAddJob = () => {
    navigate('/jobs/add');
  };

  const handleEdit = (id) => {
    navigate(`/jobs/edit/${id}`);
  };

  return (
    <div className="content">
      <div className="content--header">
        <h1 className="header--title">Jobs</h1>
        <button className="add-job" onClick={handleAddJob}>
          Add Job
        </button>
      </div>
      <TableComponent data={data} handleDelete={handleDelete} handleEdit={handleEdit} />
    </div>
  );
};

export default JobsPage;
