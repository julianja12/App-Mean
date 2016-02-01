var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('ListaContactos', ['ListaContactos']);
var dbCliente = mongojs('ListaClientes', ['ListaClientes']);
var dbFormulario = mongojs('FormularioPrincipal', ['FormularioPrincipal']);
var bodyParser = require('body-parser')

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.get('/ListaContactos',function (req,res){
 console.log("Recibida la Peticion Get")


db.ListaContactos.find(function (err,docs){
	console.log(docs);
	res.json(docs);
});

});

//Guardar Contactos en la Base de Datos
app.post('/ListaContactos', function (req,res){
	console.log(req.body);
	db.ListaContactos.insert(req.body,function(err,doc){
	res.json(doc);
	});

});

//Guardar Clientes en la Base de Datos
app.post('/ListaClientes', function (req,res){
	console.log(req.body);
	dbCliente.ListaClientes.insert(req.body,function(err,doc){
	res.json(doc);
	});

});

//Guardar Formulario Principal en la Base de Datos
app.post('/FormularioPrincipal', function (req,res){
	console.log(req.body);
	dbFormulario.FormularioPrincipal.insert(req.body,function(err,doc){
	res.json(doc);
	});
});


app.delete('/ListaContactos/:id', function (req,res){
	var id = req.params.id;
	console.log(id);
	db.ListaContactos.remove({_id: mongojs.ObjectId(id)}, function (err,doc){

		res.json(doc);

	});
});

app.get('/ListaContactos/:id', function (req,res){
	var id = req.params.id;
	console.log(id);
	db.ListaContactos.findOne({_id: mongojs.ObjectId(id)}, function (err,doc){
		res.json(doc);
	});
});

app.put('/ListaContactos/:id', function (req, res){
	var id = req.params.id;
	console.log(req.body.Cliente);
	db.ListaContactos.findAndModify({query: {_id: mongojs.ObjectId(id)},
	update: {$set: {Cliente :req.body.Cliente, Nombre: req.body.Nombre, Cargo: req.body.Cargo, Direccion: req.body.Direccion, Telefono: req.body.Telefono, Email: req.body.Email}},
	new: true},function (err, doc){
		res.json(doc);
	});
});

app.listen(3000);
console.log("Servidor Corriendo en el puerto 3000")
