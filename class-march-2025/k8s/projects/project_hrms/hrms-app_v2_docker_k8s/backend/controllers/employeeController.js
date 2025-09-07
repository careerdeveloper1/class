const db = require('../db');

exports.getEmployees = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM employees');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.addEmployee = async (req, res) => {
  try {
    const { name, joining_date, age, qualification, address, employee_id, manager, hr_manager } = req.body;
    await db.query(
      'INSERT INTO employees (name, joining_date, age, qualification, address, employee_id, manager, hr_manager) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
      [name, joining_date, age, qualification, address, employee_id, manager, hr_manager]
    );
    res.json({ message: 'Employee added successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
