require('dotenv').config(); // Load environment variables from .env file
const express = require('express'); // Import express for routing
const bodyParser = require('body-parser'); // Import body-parser for parsing request bodies
const cors = require('cors'); // Import cors to enable CORS (Cross-Origin Resource Sharing)
const db = require('./database'); // Import the database pool from database.js

const app = express(); // Create an instance of express

app.use(cors()); // Use cors middleware to enable CORS
app.use(bodyParser.json()); // Use body-parser to parse JSON request bodies
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded bodies

// Define API routes
app.get('/api', (req, res) => {
    res.send('API is working'); // Send a response to confirm the API is working
});

app.get("/api/data", (req, res) => {
    db.query("SELECT * FROM your_table", (err, results) => { // Replace 'your_table' with your actual table name
        if (err) {
            res.status(500).send(err); // Send a server error status code if there's an error
        } else {
            res.status(200).send(results); // Send the results with an OK status if no error
        }
    });
});

// Verify that the PORT environment variable has been set
const PORT = process.env.STATUS === 'development' ? process.env.DEV_PORT : process.env.PROD_PORT;
if (!PORT) {
    console.error('Error: The PORT environment variable is not set.');
    process.exit(1); // Exit the process if PORT is not defined
}

app.listen(PORT, '0.0.0.0', () => { // Listen on all network interfaces
    console.log(`Server is running on port ${PORT}.`); // Log message when server starts
});
