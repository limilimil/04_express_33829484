// Set up express
const express = require("express"); // Imports the express module

const app = express(); // Creates an express object instance

const port = 8000; // Defines the port on which application will listen for HTTP requests

// Load the route handlers
const mainRoutes = require("./routes/main");  
app.use('/', mainRoutes);


// Start listening for HTTP requests
app.listen(port, 
    () => console.log(`Node server is running on port ${port}...`));
