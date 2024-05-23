import React, { useEffect, useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import axios from 'axios';

const TableComponent = ({ handleDelete, handleEdit }) => {
  const [fetch, setFetch] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://quickhelp-2.onrender.com/api/v1/jobs/getAll");
        console.log(response.data);
        setFetch(response.data || []); // Ensure fetch is set to an empty array if response.data is undefined
      } catch (error) {
        console.log(error);
        setFetch([]); // Set fetch to an empty array in case of error
      }
    };

    fetchData();
  }, []);

  return (
    <div className="table-container">
      <div className="overflow-x-auto sm:-mx-10">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Job Picture</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Job Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Job Description</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Modify</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {fetch.map((jobs, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <img src={jobs.Picture} alt="Job" className="job-picture"/>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{jobs.JobName}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{jobs.Description}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium gap-4">
                      <div className='flex gap-5'>
                        <button className="p-2" onClick={() => handleDelete(jobs.id)}>
                          <MdDelete />
                        </button>
                        <button className="p-2" onClick={() => handleEdit(jobs.id)}>
                          <FaEdit />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableComponent;
