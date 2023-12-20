require('dotenv').config();
const mysql = require('mysql2');

// Check environment variables
const requiredEnvVars = ['DB_HOST', 'DB_USER', 'DB_PASSWORD', 'DB_NAME', 'DEV_PORT', 'PROD_PORT'];
requiredEnvVars.forEach((envVar) => {
  if (!process.env[envVar]) {
    console.error(`Error: The environment variable ${envVar} is missing.`);
    process.exit(1); // Exit if any required environment variable is not set
  }
});

const pool = mysql.createPool({
    host: process.env.DB_HOST, // Use environment variable for MySQL server address
    user: process.env.DB_USER, // Use environment variable for MySQL user
    password: process.env.DB_PASSWORD, // Use environment variable for MySQL password
    database: process.env.DB_NAME // Use environment variable for MySQL database name
});

// Test the connection
pool.getConnection((err, connection) => {
    if (err) {
        console.error("Error connecting to MySQL database:", err);
        process.exit(1); // Exit if connection to the database fails
    }
    console.log("Connected to the MySQL database!");
    connection.release(); // Release the connection back to the pool
});

module.exports = pool; // Export the pool for use elsewhere in the application
