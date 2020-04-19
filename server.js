const express = require('express'); // import Express from node_modules folder
const app = express(); // creates an instance with the express constructor
const bodyParser = require('body-parser'); // import body-parser


app.use(bodyParser.json()); // escolhe o formato de dados que será enviado para o server


// This function will respond to a GET request at http://localhost:8000/users
// with a JSON file, which includes our mockData under the key 'users'.
const mockUserData=[
{name:'Mark'},
{name:'Jill'}
]

app.get('/users', function(req,res){
 	res.json({
 	 	success: true,
 	 	message: 'successfully got users. Nice!',
 	 	users: mockUserData
 	})
})


// ou can use dynamic variables to search for specific data associated with an id
// in your database, and return that (instead of just returning the id).
app.get('/users/:id',function(req,res){
	console.log(req.params.id)
	res.json({
		success: true,
		message: 'got one user',
		user: req.params.id
	})
})


// A POST request can send data securely through the request body. 
// In order to make POST requests, first we need to include the "body-parser"
// library from our node_modules (included with express).

// handle a POST request made to the 'login' endpoint, as if a user was trying to log in
app.post('/login',function(req,res){
 	const username=req.body.username;
 	const password=req.body.password;
 
 	const mockUsername="billyTheKid";
 	const mockPassword="superSecret";
 
 	if (username===mockUsername && password===mockPassword){
      	res.json({
      	 	success: true,
      	 	message: 'password and username match!',
      	 	token: 'encrypted token goes here'
      	})
 	} else {
      	res.json({
      	 	success: false,
      	 	message: 'password and username do not match'
      	})
 	}
})


// The app.listen method will start up the server locally on the port you 
// give as its first argument (in this case the base url is: http://localhost:8000)
app.listen(8000,function(){
console.log("server is running")
})
