const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const handlebars = require('express-handlebars');
const app = express();
const crud = require('crud');
let cruds = new crud();
const urlencodeParser = bodyParser.urlencoded({extended:false});

app.use('/imgs',express.static('imgs'));
app.use('/css',express.static('css'));
app.use('/js',express.static('js'));


//Template e Engine
app.engine("handlebars",handlebars({defaultLayout:'main'}));
app.set('view engine','handlebars');


//Rotas e Templates
app.get('/',function(req,res){/*res.send("Minha Primeira Página");*/res.render('index');});

app.get('/inserir',function(req,res){res.render('inserir');});

app.get('/select/:id?',function(req,res){cruds.read(req,res);});

app.post("/controllerForm",urlencodeParser,function(req,res){
    cruds.create(req,res);
});

app.get('/deletar/:id',function(req,res){
   cruds.deletes(req,res);
});

app.get('/update/:id',function(req,res){  
   cruds.update(req,res); 
});

app.post("/controllerUpdate",urlencodeParser,function(req,res){
    cruds.update(req,res,'controller'); 
});



//Iniciando Servidor
app.listen(8000,function(req,res){
    console.log("Servidor Iniciando");
});
