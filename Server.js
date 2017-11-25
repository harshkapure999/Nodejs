
var express=require('express');
var mongoose=require('mongoose');
var bodyParser=require('body-parser');

var app=express();
var contactController=require('./controllers/contactsController.js');
contactController(app);



mongoose.connect('mongodb://localhost:27017/Politicaldb');
app.use(bodyParser.urlencoded({ extended : true }));
console.log('Political db : connected');

app.listen(1049);
console.log('app listening on port 1049');
