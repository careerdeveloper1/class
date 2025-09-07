import { useState } from 'react';
import { addEmployee } from '../api';

export default function AddEmployee() {
  const [form, setForm] = useState({});
  
  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    await addEmployee(form);
    alert('Employee added successfully!');
    window.location.reload();
  };

  return (
    <form className="employee-form" onSubmit={handleSubmit}>
      {/* Employee ID */}
      <div className="form-group">
        <label>Employee ID</label>
        <input name="employee_id" onChange={handleChange} required type="text" />
      </div>

      {/* Name */}
      <div className="form-group">
        <label>Name</label>
        <input name="name" onChange={handleChange} required type="text" />
      </div>

      {/* Joining Date with Date Picker */}
      <div className="form-group">
        <label>Joining Date</label>
        <input name="joining_date" onChange={handleChange} required type="date" />
      </div>

      {/* Age */}
      <div className="form-group">
        <label>Age</label>
        <input name="age" onChange={handleChange} required type="number" min="18" />
      </div>

      {/* Qualification */}
      <div className="form-group">
        <label>Qualification</label>
        <input name="qualification" onChange={handleChange} required type="text" />
      </div>

      {/* Address */}
      <div className="form-group">
        <label>Address</label>
        <input name="address" onChange={handleChange} required type="text" />
      </div>

      {/* Manager */}
      <div className="form-group">
        <label>Manager</label>
        <input name="manager" onChange={handleChange} required type="text" />
      </div>

      {/* HR Manager */}
      <div className="form-group">
        <label>HR Manager</label>
        <input name="hr_manager" onChange={handleChange} required type="text" />
      </div>

      {/* Submit Button */}
      <button type="submit" className="btn">Add Employee</button>
    </form>
  );
}
