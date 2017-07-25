var express = require('express');
var path = require('path');

var MongoClient = require('mongodb').MongoClient
  
// Connection url
var url = 'mongodb://localhost:27017/Examinationdb';

var app = express();

app.use(express.static(path.resolve(__dirname + './../frontend/views')));

app.use(express.static(path.resolve(__dirname + './../frontend')));

console.log(path.resolve(__dirname + './../frontend'),">>>>>")


app.get('/' , function(req,res){
	res.render('index.html'); 
})


console.log(__dirname);


app.get('/SignIn' , function(req,res){

	console.log('>>> data received from front' , req.query);
	

MongoClient.connect(url , function(err,db){

if(err){
	console.log(err);
}
console.log('connected')

db.collection('Students').findOne({mail:req.query.mail} , function(err,data){
if(err){
	return res.send('Error');
}


if(data){

if(data.password==req.query.password){

	res.send(data);
}
else{
	res.send('password incorrect')

}
}
else
{
	res.send("no user exists by this email")
}
console.log(">>>>>> data" , data);

})

})

})


app.post('/SignUp' , function(req,res){

	console.log('>>> data received from front' , req.query);
	

MongoClient.connect(url , function(err,db){

if(err){
	console.log(err);
}
console.log('connected')

db.collection('Students').insertOne(req.query , function(err,data){
if(err){
	return res.send('Error');
}
res.send('created');


})

})

})


app.post('/Forget', function(req,res) {

console.log(req.query);

})


app.post('/AddQuestion' , function(req,res){

	console.log('>>> data received from front' , req.query);
	

MongoClient.connect(url , function(err,db){

if(err){
	console.log(err);
}
console.log('connected')

db.collection('Questions').insertOne(req.query , function(err,data){
if(err){
	return res.send('Error');
}
res.send('created');


})

})

})

app.get('/StartTest' , function(req,res){

	
console.log("...................")
MongoClient.connect(url , function(err,db){

if(err){
	console.log(err);
}
console.log('connected')

db.collection('Questions').find({}).toArray(function(err,ques){
if(err){
	res.send(err);
}

else
	res.send(ques);

})

})

})

app.listen(7000,function(){
	console.log('server started');
});