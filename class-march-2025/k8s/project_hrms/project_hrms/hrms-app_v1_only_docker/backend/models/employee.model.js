const db = require('../config/db.config');

const Employee = {
  getAll: (callback) => {
    db.query('SELECT * FROM employees', callback);
  },
  
  getById: (id, callback) => {
    db.query('SELECT * FROM employees WHERE id = ?', [id], callback);
  },
  
  create: (employeeData, callback) => {
    const { employee_id, name, joining_date, age, qualifications, address, manager, hr_manager } = employeeData;
    db.query(
      'INSERT INTO employees (employee_id, name, joining_date, age, qualifications, address, manager, hr_manager) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
      [employee_id, name, joining_date, age, qualifications, address, manager, hr_manager],
      callback
    );
  },
  
  update: (id, employeeData, callback) => {
    const { employee_id, name, joining_date, age, qualifications, address, manager, hr_manager } = employeeData;
    db.query(
      'UPDATE employees SET employee_id = ?, name = ?, joining_date = ?, age = ?, qualifications = ?, address = ?, manager = ?, hr_manager = ? WHERE id = ?',
      [employee_id, name, joining_date, age, qualifications, address, manager, hr_manager, id],
      callback
    );
  },
  
  delete: (id, callback) => {
    db.query('DELETE FROM employees WHERE id = ?', [id], callback);
  }
};

module.exports = Employee;