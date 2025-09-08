import { useEffect, useState } from 'react';
import { fetchEmployees } from '../api';

export default function EmployeeList() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetchEmployees().then(setEmployees);
  }, []);

  return (
    <div className="employee-list">
      <p><strong>Total Employees:</strong> {employees.length}</p>
      <table>
        <thead>
          <tr>
            <th>Employee ID</th><th>Name</th><th>Joining Date</th><th>Age</th>
            <th>Qualification</th><th>Address</th><th>Manager</th><th>HR Manager</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(emp => (
            <tr key={emp.employee_id}>
              <td>{emp.employee_id}</td>
              <td>{emp.name}</td>
              <td>{emp.joining_date}</td>
              <td>{emp.age}</td>
              <td>{emp.qualification}</td>
              <td>{emp.address}</td>
              <td>{emp.manager}</td>
              <td>{emp.hr_manager}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
