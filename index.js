var express = require('express');
var serveStatic = require('serve-static');
var PORT = process.env.PORT || 3000;

var app = express();

app.use(serveStatic('src', {'index': ['index.html', 'index.htm']}));
app.listen(PORT);
