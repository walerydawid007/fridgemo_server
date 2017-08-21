var express = require('express');
var bodyParser = require('body-parser');
var getfoodlistrouter =  require('./routes/getfoodlist.js');
var getIngredientlistrouter =  require('./routes/getIngredients_a.js');
var app = express();
var path = require('path');
var server = require('http').Server(app);
var PORT = 5000;
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use('/api', getfoodlistrouter);
app.use('/api', getIngredientlistrouter);
app.get('/', function(req, res, next){
    res.sendStatus(200);
});
app.listen(PORT, function () {
  console.log('Listening on port ' + PORT);
});
