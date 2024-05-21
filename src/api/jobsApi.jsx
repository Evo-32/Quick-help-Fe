const API_URL = "http://your-api-url.com"; // Replace with your actual API URL

export const fetchJobs = async () => {
  const response = await fetch(`${API_URL}/jobs`);
  if (!response.ok) {
    throw new Error("Failed to fetch jobs");
  }
  return response.json();
};

export const addJob = async (job) => {
  const response = await fetch(`${API_URL}/jobs`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(job),
  });
  if (!response.ok) {
    throw new Error("Failed to add job");
  }
  return response.json();
};

export const updateJob = async (id, job) => {
  const response = await fetch(`${API_URL}/jobs/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(job),
  });
  if (!response.ok) {
    throw new Error("Failed to update job");
  }
  return response.json();
};

export const deleteJob = async (id) => {
  const response = await fetch(`${API_URL}/jobs/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error("Failed to delete job");
  }
  return response.json();
};
