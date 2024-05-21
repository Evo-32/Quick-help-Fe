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
      const jobs = await fetchJobs();
      setData(jobs);
    };
    loadJobs();
  }, []);

  const handleDelete = async (id) => {
    await deleteJob(id);
    setData(data.filter((job) => job.id !== id));
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
