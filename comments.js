//Create a web server
//Create a route for comments
//Create a form for comments
//Create a route for GET requests
//Create a route for POST requests
//Create a route for DELETE requests
//Create a route for PUT requests

var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//GET request
app.get('/comments', function(req, res) {
    fs.readFile('comments.json', 'utf8', function(err, data) {
        if (err) {
            console.log(err);
        } else {
            res.send(data);
        }
    });
});

//POST request
app.post('/comments', function(req, res) {
    var newComment = req.body;
    fs.readFile('comments.json', 'utf8', function(err, data) {
        if (err) {
            console.log(err);
        } else {
            var comments = JSON.parse(data);
            comments.push(newComment);
            fs.writeFile('comments.json', JSON.stringify(comments), function(err) {
                if (err) {
                    console.log(err);
                } else {
                    res.send('Comment added');
                }
            });
        }
    });
});

//DELETE request
app.delete('/comments', function(req, res) {
    fs.writeFile('comments.json', '[]', function(err) {
        if (err) {
            console.log(err);
        } else {
            res.send('Comments deleted');
        }
    });
});

//PUT request
app.put('/comments/:index', function(req, res) {
    var index = req.params.index;
    var newComment = req.body;
    fs.readFile('comments.json', 'utf8', function(err, data) {
        if (err) {
            console.log(err);
        } else {
            var comments = JSON.parse(data);
            comments[index] = newComment;
            fs.writeFile('comments.json', JSON.stringify(comments), function(err) {
                if (err) {
                    console.log(err);
                } else {
                    res.send('Comment updated');
                }
            });
        }
    });
});

app.listen(3000, function() {
    console.log('Server is running on port 3000');
});