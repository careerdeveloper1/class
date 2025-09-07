import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/employees');
      setEmployees(response.data);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch employees');
      setLoading(false);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h2>Employee Directory</h2>
      <table className="employee-table">
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>Name</th>
            <th>Joining Date</th>
            <th>Age</th>
            <th>Qualifications</th>
            <th>Address</th>
            <th>Manager</th>
            <th>HR Manager</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(employee => (
            <tr key={employee.id}>
              <td>{employee.employee_id}</td>
              <td>{employee.name}</td>
              <td>{new Date(employee.joining_date).toLocaleDateString()}</td>
              <td>{employee.age}</td>
              <td>{employee.qualifications}</td>
              <td>{employee.address}</td>
              <td>{employee.manager}</td>
              <td>{employee.hr_manager}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;