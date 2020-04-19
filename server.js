const express = require('express'); // import Express from node_modules folder
const app = express(); // creates an instance with the express constructor


// The app.listen method will start up the server locally on the port you 
// give as its first argument (in this case the base url is: http://localhost:8000)
app.listen(8000,function(){
console.log("server is running")
})
