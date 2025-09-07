const Employee = require('../models/employee.model');

exports.getAllEmployees = (req, res) => {
  Employee.getAll((err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving employees.'
      });
    } else {
      res.send(data);
    }
  });
};

exports.createEmployee = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: 'Content cannot be empty!'
    });
  }

  const employee = {
    employee_id: req.body.employee_id,
    name: req.body.name,
    joining_date: req.body.joining_date,
    age: req.body.age,
    qualifications: req.body.qualifications,
    address: req.body.address,
    manager: req.body.manager,
    hr_manager: req.body.hr_manager
  };

  Employee.create(employee, (err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the employee.'
      });
    } else {
      res.send(data);
    }
  });
};

exports.getEmployeeById = (req, res) => {
  Employee.getById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === 'not_found') {
        res.status(404).send({
          message: `Employee not found with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: `Error retrieving employee with id ${req.params.id}`
        });
      }
    } else {
      res.send(data);
    }
  });
};