var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var multer = require("multer");
var upload = multer();
var mysql = require("mysql");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(upload.array());
app.set("view engine","ejs");
app.use(express.static("public"));
var player1 = "Player1" ;
var player2 = "Player2";
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "fortunatehumanae"
})
app.get("/secondpage",function(req,res){
    res.render("SpiderTask1",{name1:player1,name2:player2})
})
app.get("/firstpage",function(req,res){
    res.render("intropage")
})
app.post("/firstpage",function(req,res){
    player1 = req.body.player1;
    player2 = req.body.player2;
    res.redirect("/secondpage");
})
app.listen(3000,function(err){
    if(err){
        return console.log(err);
    }
    console.log("Server is running");
})