# 3-Tier Application Deployment on Azure Linux Virtual Machine

This repository provides a cheat sheet to deploy a 3-tier application on an Azure Linux Virtual Machine. The application consists of a Frontend (FE), Backend (BE), and Database (DB) components.

## Prerequisites

Before you begin, ensure you have:

- An Azure account and a Linux-based virtual machine (VM) running.
- SSH access to the VM.
- Basic knowledge of Node.js, MySQL, and Linux commands.

## Overview

1. **Frontend (FE)**: A static web application that is served using `serve` after installing Node.js.
2. **Backend (BE)**: A Node.js-based server running with MySQL database connection.
3. **Database (DB)**: A MySQL database server hosting the application data.

---

## Deployment Steps

### 1. **Frontend (FE) Setup**

The frontend application will be deployed to the `/var/www/frontend` directory on the VM.

1. **Create the directory:**
   ```bash
   sudo mkdir -p /var/www/frontend
   cd /var/www/frontend
Change ownership and set permissions:

   ```bash

sudo chown -R frontenduser:frontenduser /var/www/frontend
sudo chmod -R 755 /var/www/frontend
Install Node.js (LTS version):

   ```bash

sudo apt update
sudo apt-get remove --purge nodejs npm -y
sudo apt-get autoremove -y
sudo rm /usr/bin/node
sudo rm /usr/bin/npm
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs
node -v
npm -v
Install serve globally:

   ```bash

sudo npm install -g serve
Serve the frontend application (assumes a dist directory):

   ```bash
   
npx serve -s dist



2. Backend (BE) Setup
The backend application will be deployed to the /var/www/backend directory.

Create the directory:

   ```bash

sudo mkdir -p /var/www/backend
cd /var/www/backend
Change ownership and set permissions:

   ```bash

sudo chown -R backenduser:backenduser /var/www/backend
sudo chmod -R 755 /var/www/backend
Install Node.js (LTS version):

   ```bash

sudo apt update
sudo apt-get remove --purge nodejs npm -y
sudo apt-get autoremove -y
sudo rm /usr/bin/node
sudo rm /usr/bin/npm
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs
node -v
npm -v
Install cors (for Cross-Origin Resource Sharing):

   ```bash

npm install cors
Run the backend server:

   ```bash

node server.js
3. Database (DB) Setup
The database will be MySQL, and it will be set up to listen for remote connections.

Install MySQL server:

   ```bash

sudo apt update
sudo apt install -y mysql-server
sudo mysql_secure_installation
Log in to MySQL:

   ```bash

sudo mysql -u root
Create a new database:

sql

CREATE DATABASE hospital_db;
USE hospital_db;
Create a doctors table:

sql

CREATE TABLE doctors (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255),
  attendance VARCHAR(50)
);
Modify password policy (optional):

sql

SHOW VARIABLES LIKE 'validate_password%';
SET GLOBAL validate_password.policy = LOW;
Configure MySQL user for remote access:

sql

CREATE USER 'root'@'172.167.8.117' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON *.* TO 'root'@'172.167.8.117' WITH GRANT OPTION;
FLUSH PRIVILEGES;
Modify MySQL configuration to allow remote connections:

   ```bash

sudo nano /etc/mysql/mysql.conf.d/mysqld.cnf
bind-address = 0.0.0.0
sudo ufw allow 3306/tcp
Start the MySQL service:

   ```bash

sudo systemctl status mysql
sudo systemctl start mysql
Ensure root password is updated for native password authentication:

sql

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
FLUSH PRIVILEGES;
EXIT;
Verify the database and table creation:

sql

SHOW DATABASES;
USE hospital_db;
SHOW TABLES;
SELECT * FROM doctors;
Troubleshooting
MySQL Remote Access Issues: Ensure the firewall allows MySQL (3306) port and verify the bind-address is set to 0.0.0.0 in MySQL config.
Node.js Version Issues: Ensure that you're using the LTS version of Node.js, and verify that it’s installed correctly.
Permissions: Ensure correct directory ownership and permissions are set for frontend and backend directories.
Conclusion
This cheat sheet provides a basic guide for deploying a 3-tier application on an Azure Linux Virtual Machine. After completing these steps, you will have a fully functional application with frontend, backend, and MySQL database components.

For further customization and security, consider using environment variables, enabling HTTPS, and configuring your Azure VM's firewall settings.

