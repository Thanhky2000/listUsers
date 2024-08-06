
const path = require('path');
const express = require('express');

const configViewEngine = (app) => {
    app.set('views', path.join(__dirname, '..', 'views'));  // Đặt đường dẫn tới thư mục views
    app.set('view engine', 'ejs');  // Đặt view engine là EJS
    // app.use(express.static(path.join(__dirname, 'publics')));  // Đặt thư mục tĩnh
    app.use(express.static(path.join(__dirname, '..', 'publics')));
}

module.exports = configViewEngine;



