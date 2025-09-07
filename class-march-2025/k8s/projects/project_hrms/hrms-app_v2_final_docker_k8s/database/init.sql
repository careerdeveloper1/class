CREATE DATABASE IF NOT EXISTS hrms_db;
USE hrms_db;

CREATE TABLE IF NOT EXISTS employees (
    employee_id INT PRIMARY KEY,
    name VARCHAR(100),
    joining_date DATE,
    age INT,
    qualification VARCHAR(100),
    address VARCHAR(255),
    manager VARCHAR(100),
    hr_manager VARCHAR(100)
);
