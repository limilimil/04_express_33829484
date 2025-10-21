// Create a new router
const express = require("express");
const router = express.Router();

const path = require('path'); // Imports the path module for file directories

// Handle the main routes
router.get("/", (req, res) => res.send("Hello World!")); // Handles requests for the default web page

router.get('/about', (req, res) => res.send ('<h1>This is about page</h1>')); // Handles requests for the about page

router.get('/contact', (req, res) => res.send ('<h1>Contact</h1><p>You can contact me via my email address: <a href="mailto:example@email.com">example@email.com</a></p>')); // Handles requests for the contact page

router.get('/date', (req, res) => {
    const today = new Date(); // Gets the current timestamp, dynamically updates on refresh
    res.send (`<h1>Date and Time: ${today.toLocaleString()}</h1>`)
}); // Handles requests for the date page

router.get(`/welcome/{:name}`, (req, res) => res.send (`<h1>Welcome ${req.params.name ?? ''}</h1>`)); // Handles the route for the welcome page, with an optional name parameter

router.get('/chain', (req, res, next) => {
    console.log("Routing first chain");
    req.customMessage = {first : '<p>This came from the first chain.</p>', second: ''}; // Stores the chain message in a custom req variable
    next(); // Passes control to the next handler
}, (req, res, next) => {
    console.log("Routing second chain");
    req.customMessage.second = '<p>This came from the second chain.</p>'; // Stores the second message in the req variable
    next();
}, (req, res) => {
    res.send (`<h1>Heading from the end of the chain</h1> ${req.customMessage.first} ${req.customMessage.second}`);
}); // Handles requests for the chain page with route chaining

router.get(`/file`, (req, res) => res.sendFile (path.join(__dirname, '../views/a.html'))); // Handles requests for the file page, with html file rendering

// Export the router object so index.js can access it
module.exports = router;