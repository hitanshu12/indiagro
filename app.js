const http = require('http');
const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
var nodemailer = require('nodemailer');


const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var path = require("path");

// const connection = require('./connection/config.js');
// const login = require('./login/loginroutes');

// const routing = require('./routing/routing');

app.use(express.static(__dirname + 'views'));
app.use(express.static('public'));
app.set('view engine', 'ejs');


app.get('/', function (req, res) {
  res.render('index');
});


var mysql = require('mysql');
var pool = mysql.createPool({
	connectionLimit : 100, //focus it
	host : 'localhost',
	user : 'root',
	password : '',
	database : 'indiagro'
});

//insert data
app.post('/contact', function(req,res){
	pool.getConnection(function(error,conn){
		var queryString = "insert into contact_us(fullname,phonenumber,emailadd,services,enquiry) values('"+req.body.fullname+"','"+req.body.phonenumber+"','"+req.body.emailadd+"','"+req.body.services+"', '"+req.body.enquiry+"')";
		conn.query(queryString,function(error,results){
			if(error)
			{
				throw error;
			}
			else
			{
				return res.redirect('/contact');
			}
		});
		conn.release();
	});
});

// Admin Login

app.post('/login', function(req, res){
    if(req.method == "POST"){
        var postVars = {username: req.body.username, password: req.body.password};
        connection.query("INSERT INTO user_login set ?", postVars, function(err, result) {
            if(err){
                throw err;
            }else{
                return res.redirect('/index');
            }

        });
    }
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

app.get('/honey', function(req, res){
    res.render('honey');
});

app.get('/basmati', function(req, res){
    res.render('basmati');
});

app.get('/indianspices', function(req, res){
    res.render('indianspices');
});

app.get('/nonbasmati', function(req, res){
    res.render('nonbasmati');
});

app.get('/oliveoil', function(req, res){
    res.render('oliveoil');
});

app.get('/tea', function(req, res){
    res.render('tea');
});

app.get('/yellowmaize', function(req, res){
    res.render('yellowmaize');
});

app.get('/yellowpeas', function(req, res){
    res.render('yellowpeas');
});

app.get('/privatelabel', function(req, res){
    res.render('privatelabel');
});

app.get('/login', function(req, res){
    res.render('login');
});



// Node Mailer code


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

