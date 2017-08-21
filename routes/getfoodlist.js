var express = require('express');
var axios = require('axios');
const cheerio = require('cheerio');
const cheerioTableParse = require('cheerio-tableparser');
const base_url = 'http://www.bbc.co.uk/food/ingredients';
var getFootRoueter = express.Router();

getFootRoueter
  .route('/getfoodlist')
  .get(function (req, res) {
      console.log('getFoodListItems');
      axios.get(base_url).then( (response) => {
          // console.log(response);
          let $ = cheerio.load(response.data);
          cheerioTableParse($);
          let list =[];
          $("#featured-foods li").each(function(){
              let footlists = $(this);
              let item={
                  id: $(footlists).attr('id'),
                  link:$(footlists).children().attr('href'),
                  image: $(footlists).children().eq(0).find('img').attr('src'),
                  title: $(footlists).children().eq(0).find('.display-property').text()
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
module.exports = getFootRoueter;
