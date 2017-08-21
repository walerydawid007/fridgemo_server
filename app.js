var express = require('express');
var bodyParser = require('body-parser');
var getfoodlistrouter =  require('./routes/getfoodlist.js');
var getIngredientlistrouter =  require('./routes/getIngredients_a.js');
var app = express();
var path = require('path');
var server = require('http').Server(app);
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use('/api', getfoodlistrouter);
app.use('/api', getIngredientlistrouter);
app.get('/index', function(req, res){
    res.json({'status':'success'});
});
app.get('/', function(req, res){
    res.json({'status':'success'});
});
app.listen(process.env.PORT || 3000, function () {
  console.log('Listening on port ' + 3000);
});
