import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EmployeesPage from './components/EmployeesPage'; 
import JobsPage from './components/JobsPage'; 
import "./App.css";
import DashBoardPage from './components/DashBoardPage';
import BookingsPage from './components/BookingsPage';
import AuthPages from './components/AuthPages';
import AddEditJobPage from './components/AddEditJobPage';
import FormComponentEmployees from './components/FormComponentEmployees';
import EditEmployeePage from './components/EditEmployeePage';
import EditJobPage from './components/EditJobPage';

const App = () => {
  return (
    <Router>
      <div className="dashboard">
        <div className='dashboard--content'>
          <Routes>
            <Route path="/" element={<AuthPages />}>
              <Route index element={<DashBoardPage />} />
              <Route path="/employee" element={<EmployeesPage />} />
              <Route path="/employee/add" element={<FormComponentEmployees />} />
              <Route path="/employee/update/:id" element={<EditEmployeePage />} />
              <Route path="/jobs" element={<JobsPage />} />
              <Route path="/jobs/add" element={<AddEditJobPage />} />
              <Route path="/jobs/updateJob/:id" element={<EditJobPage />} />
              <Route path="/bookings" element={<BookingsPage />} />
            </Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
