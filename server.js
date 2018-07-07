console.log("hello world");
// Load the http module to create an http server.
var http = require('http');
var url = require("url");


// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  var page = url.parse(request.url).pathname;
  console.log(page);
  response.writeHead(200, {"Content-Type": "text/html"});
if(page == '/'){

	response.end('<p>Hello World! Lets start ranking games.</p>');
}
else if (page =='/games'){

	response.end('<p>We are getting the games loaded</p>');
}
else {
	response.writeHead(404, {"Content-Type": "text/html"});
	response.end('Sorry');
}
});

// Listen on port 8000, IP defaults to 127.0.0.1
server.listen(8000);

// Put a friendly message on the terminal
console.log("Server running at http://127.0.0.1:8000/");


server.on('close', function() { // We listened to the close event
    console.log('Goodbye!');
})


