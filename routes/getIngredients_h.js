var express = require('express');
var axios = require('axios');
const cheerio = require('cheerio');
const cheerioTableParse = require('cheerio-tableparser');
var getIngredientRoueter = express.Router();
const base_url = 'http://www.bbc.co.uk/food/ingredients/by/letter/';
getIngredientRoueter
  .route('/getIngredients_h')
  .get(function (req, res) {
      let list =[];
      var i = 0;
      axios.get(base_url+'h').then( (response) => {
          // console.log(response);
          let $ = cheerio.load(response.data);
          cheerioTableParse($);
          $(".foods li").each(function(){
              let footlists = $(this);
              console.log('getIngredientListItems');
              let item={
                  title: $(footlists).children().eq(0).find('img').attr('alt'),
                  image: $(footlists).children().eq(0).find('img').attr('src')
              };
              console.log(item);
              list.push(item);
          });
          res.status(200).json(list);

        })
      .catch(error => {
        console.log(error);
        res.status(500).send(error);
        // db.disconnect();
      });


  });
module.exports = getIngredientRoueter;
