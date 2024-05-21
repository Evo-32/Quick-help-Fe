import React from 'react';

const TableComponentEmployees = ({ data }) => {
  if (!Array.isArray(data)) {
    return <div>No data available</div>;
  }

  return (
    <table className="employee-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Profile Picture</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>ID Card</th>
          <th>Job</th>
          <th>Experience</th>
          <th>Min Salary</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((employee) => (
          <tr key={employee.id}>
            <td>{employee.id}</td>
            <td>
              <img src={employee.profilePicture} alt={`${employee.firstName} ${employee.lastName}`} />
            </td>
            <td>{employee.firstName}</td>
            <td>{employee.lastName}</td>
            <td>{employee.email}</td>
            <td>{employee.phone}</td>
            <td>{employee.idCard}</td>
            <td>{employee.job}</td>
            <td>{employee.experience}</td>
            <td>{employee.minSalary}</td>
            <td>{employee.status}</td>
            <td>
              <button onClick={() => handleEdit(employee.id)}>Edit</button>
              <button onClick={() => handleDelete(employee.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableComponentEmployees;
