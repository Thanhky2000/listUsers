// import express from "express";
require('dotenv').config();
const express = require('express');
const configViewEngine = require('./config/viewEngine');
const routes = require('./routes/web');
const connection = require('./config/database');

const app = express();
const port = process.env.PORT || 3001;
configViewEngine(app);

app.use(express.json()); // Used to parse JSON bodies
app.use(express.urlencoded()); //Parse URL-encoded bodies

app.use(routes);




connection.query(
    'SELECT * FROM  Users u',
);


app.listen(port, () => {
console.log(`Listen on port ${port}`);
})