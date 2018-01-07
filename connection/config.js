// const express = require('express');
// const bodyParser = require('body-parser');
// const app = express();

// app.use(express.static(__dirname + 'views'));
// app.use(express.static('public'));
// app.set('view engine', 'ejs');

// var mysql = require('mysql');
// var connection = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'root',
//   password : '',
//   database : 'indiagro'
// });

// connection.connect(function(err){
//     if(!err) {
//         console.log("Database is connected ...");
//     } else {
//         console.log("Error connecting database ...");
//     }
// });


// app.post('/thankyou', function(req,res){
//     pool.getConnection(function(error,conn){
//         var queryString = "INSERT INTO contact_us(fullname, phonenumber, emailadd, services, enquiry) VALUES('"+req.body.fullname+"','"+req.body.phone+"', '"+req.body.emailadd+"', '"+req.body.services+"', '"+req.body.enquiry+"')";
//         connection.query(queryString,function(error,results){
//             if(error)
//             {
//                 throw error;
//             }
//             else
//             {
//                 res.send('Inserted Successfully!')
//             }
//         });
//         conn.release();
//     });
// });

// // app.post('/contact', function(req, res){
// //     var fullName = req.body.fullname;
// //     var phone = req.body.phonenumber;
// //     var emailadd = req.body.emailadd;
// //     var services = req.body.services;
// //     var enquiry = req.body.enquiry;
// //     connection.getConnection(function(error,conn){
// //         conn.query("INSERT INTO contact_us(fullname, phonenumber, emailadd, services, enquiry) VALUES('"+fullName+"','"+phone+"', '"+emailadd+"', '"+services+"', '"+enquiry+"')", function(err, result) {
// //             if(!err) {
// //                 console.log("Inserted Successfully");
// //             } else {
// //                 console.log("Inserted Failed");
// //             }
// //         });  
// //         conn.release();   
// //     });
// // });

// //exports.register = function(req, res){
//     // var post  = {
//     //     fullname: 'hitanshu',
//     //     phonenumber: '9521576361',
//     //     emailadd: 'write2hitanhu@gmail.com',
//     //     services: 'tea',
//     //     enquiry: 'xyz'
//     // };
//     // connection.query('INSERT INTO contact_us SET ?', post, function(err, result) {
//     //     if(!err) {
//     //         console.log("Inserted Successfully");
//     //     } else {
//     //         console.log("Inserted Failed");
//     //     }
//     // });
// //}



// module.exports = connection;

