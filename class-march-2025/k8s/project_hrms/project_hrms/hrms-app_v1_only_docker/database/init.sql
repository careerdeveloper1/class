CREATE DATABASE IF NOT EXISTS hrms_db;
USE hrms_db;

CREATE TABLE employees (
    id INT AUTO_INCREMENT PRIMARY KEY,
    employee_id VARCHAR(50) UNIQUE NOT NULL,
    name VARCHAR(100) NOT NULL,
    joining_date DATE NOT NULL,
    age INT NOT NULL,
    qualifications TEXT,
    address TEXT,
    manager VARCHAR(100),
    hr_manager VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO employees (employee_id, name, joining_date, age, qualifications, address, manager, hr_manager) VALUES
('VT001', 'Rahul Sharma', '2023-01-15', 32, 'B.Tech Computer Science', 'Bangalore, Karnataka', 'Anjali Mehta', 'Priya Singh'),
('VT002', 'Priya Patel', '2022-08-10', 28, 'MBA HR', 'Mumbai, Maharashtra', 'Rajiv Malhotra', 'Priya Singh'),
('VT003', 'Amit Kumar', '2023-03-22', 35, 'M.Tech Mechanical', 'Delhi, NCR', 'Anjali Mehta', 'Priya Singh');