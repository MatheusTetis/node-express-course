const express = require('express'); // import Express from node_modules folder
const app = express(); // creates an instance with the express constructor


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


// The app.listen method will start up the server locally on the port you 
// give as its first argument (in this case the base url is: http://localhost:8000)
app.listen(8000,function(){
console.log("server is running")
})
