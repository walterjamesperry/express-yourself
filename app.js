const http = require('http');
const path = require('path');

const express = require('express');
const ejs = require('ejs');
const app = express();
app.use(express.static('public'));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res){
res.render('index.ejs', {
    skills:['HTML', 'CSS', 'Javascript', 'Node.js/express.js', 'MongoDB/Mongoose.js', 'Backbone.js'],
    hobbies:['Traveling', 'Coding', 'Standing Backflis']
  });
});

const port = 3000;
const server = http.createServer(app);
server.listen(port);
console.log(`Server listening on: ${port}`);
//backticks are a template string in ecmascipt 6
