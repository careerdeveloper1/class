const express = require('express');
const router = express.Router();
const { getEmployees, addEmployee } = require('../controllers/employeeController');

router.get('/employees', getEmployees);
router.post('/employees', addEmployee);

module.exports = router;
