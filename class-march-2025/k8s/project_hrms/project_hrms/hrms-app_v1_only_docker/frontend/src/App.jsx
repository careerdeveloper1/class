import React from 'react';
import Navbar from './components/Navbar';
import EmployeeList from './components/EmployeeList';

function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <EmployeeList />
      </div>
    </div>
  );
}

export default App;