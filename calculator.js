//jshint esversion:6
//the __dirname constant that allows us to grab hold of a file's location at any given time
const express = require("express");
const bodyParser = require("body-parser");


const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html")
})

app.post("/", function(req, res){
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);

    var result = num1 + num2;
    res.send("The result of the calculation is " + result)
})



// bmi Calculator

app.get("/bmicalculator", function(req, res){
    res.sendFile(__dirname + "/bmiCalculator.html")
})

app.post("/bmicalculator",  function(req, res){
    var weight = parseFloat(req.body.weight)
    var height = parseFloat(req.body.height)

    var bmi = weight / height;
    res.send("Your BMI is "+ bmi)
})

app.listen(3001, function(){
    console.log("application is up an running in port 3001")
})