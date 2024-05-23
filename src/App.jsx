import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EmployeesPage from './components/EmployeesPage'; 
import JobsPage from './components/JobsPage'; 
import "./App.css";
import DashBoardPage from './components/DashBoardPage';
import ContactUsPage from './components/ContactUsPage';
import AuthPages from './components/AuthPages';
import AddEditJobPage from './components/AddEditJobPage';
import FormComponentEmployees from './components/FormComponentEmployees';

const App = () => {
  return (
    <Router>
      <div className="dashboard">
        <div className='dashboard--content'>
          <Routes>
            <Route path="/" element={<AuthPages />}>
              <Route index element={<DashBoardPage />} />
              <Route path="/employee" element={<EmployeesPage />} />
              <Route path="/employees/add" element={<FormComponentEmployees/>} /> // Route for adding a worker
              <Route path="/jobs" element={<JobsPage />} />
              <Route path="/contactus" element={<ContactUsPage />} />
              <Route path="/jobs/add" element={<AddEditJobPage />} />
              <Route path="/jobs/edit/:index" element={<AddEditJobPage />} />
            </Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
