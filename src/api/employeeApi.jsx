import axios from 'axios';

const API_URL = 'https://quickhelp-2.onrender.com/api/v1/employee';

export const fetchEmployees = async () => {
  try {
    const res = await axios.get(`${API_URL}/get`);
    return res.data; // Adjust this based on the structure of your API response
  } catch (error) {
    console.error('Error fetching employees:', error);
    throw new Error('Failed to fetch employees');
  }
};

export const getEmployee = async (id) => {
  try {
    const res = await axios.get(`${API_URL}/get/${id}`);
    return res.data; // Adjust this based on the structure of your API response
  } catch (error) {
    console.error(`Error fetching employee with id ${id}:`, error);
    throw new Error(`Failed to fetch employee with id ${id}`);
  }
};

export const addEmployee = async (employee) => {
  try {
    const formData = new FormData();
    for (const key in employee) {
      formData.append(key, employee[key]);
    }
    const res = await axios.post(`${API_URL}/add`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return res.data; // Adjust this based on the structure of your API response
  } catch (error) {
    console.error('Error adding employee:', error);
    throw new Error('Failed to add employee');
  }
};

export const updateEmployee = async (id, employee) => {
  try {
    const formData = new FormData();
    for (const key in employee) {
      formData.append(key, employee[key]);
    }
    const res = await axios.put(`${API_URL}/update/${id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return res.data; // Adjust this based on the structure of your API response
  } catch (error) {
    console.error(`Error updating employee with id ${id}:`, error);
    throw new Error(`Failed to update employee with id ${id}`);
  }
};

export const deleteEmployee = async (id) => {
  try {
    const res = await axios.delete(`${API_URL}/delete/${id}`);
    return res.data; // Adjust this based on the structure of your API response
  } catch (error) {
    console.error(`Error deleting employee with id ${id}:`, error);
    throw new Error(`Failed to delete employee with id ${id}`);
  }
};
