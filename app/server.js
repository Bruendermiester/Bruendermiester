var express = require('express');
var app = express();
var path = '/Users/JonBr/Documents/GitHub/MeanStackWebsite2016/app';

app.use(express.static(path));

app.get('*', function(req, res) {
	res.sendFile(path + '/index.html');
});

app.listen(3000);