const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.render('index');
});

app.get('/about', function(req, res) {
    res.render('about');
});

app.get('/organic', function(req, res) {
    res.render('organic');
});
app.get('/conventional', function(req, res) {
    res.render('conventional');
});

app.get('/gallery', function(req, res) {
    res.render('gallery');
});
app.get('/contact', function(req, res) {
    res.render('contact');
});
