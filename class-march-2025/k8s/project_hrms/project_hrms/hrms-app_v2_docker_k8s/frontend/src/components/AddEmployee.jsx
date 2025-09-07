import { useState } from 'react';
import { addEmployee } from '../api';

export default function AddEmployee() {
  const [form, setForm] = useState({});
  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = async e => { e.preventDefault(); await addEmployee(form); alert('Added!'); }

  return (
    <form onSubmit={handleSubmit}>
      {['name','joining_date','age','qualification','address','employee_id','manager','hr_manager'].map(field => (
        <div key={field}>
          <label>{field}: </label>
          <input name={field} onChange={handleChange} />
        </div>
      ))}
      <button type="submit">Add Employee</button>
    </form>
  );
}
