//server.js
const express = require('express'),
      server = express(),
      users = require('./users');

//setting the port.
server.set('port', process.env.PORT || 3000);

//Adding routes
server.get('/',(request,response)=>{
 response.sendFile('C:/Users/mranganathan/Desktop/Hackatho19/flatironsHackathon19/test.html');
});

server.get('/save',(request,response)=>{
 response.json(users);
});

//Binding to localhost://3000
server.listen(3002,()=>{
 console.log('Express server started at port 3000');
});