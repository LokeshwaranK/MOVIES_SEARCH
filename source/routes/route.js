const express = require('express');
const route = express.Router();

const client = require('../../connection');


route.get('',(req,res)=>{
  res.render('home')
})




route.post('', (req,res)=>{
   client.search({  
          index: 'imdbmovies',
          type: 'movies_search',
          size: 20,
          body: {
            query: {
              match: { "title": req.body.movie},
            },
            sort: { "date_published": { "order": "asc" } },
          }
        },function (error, response,status) {
            if (error){
              console.log("search error: "+error)
            }
            else {
              console.log("Response success");
               res.render('search',{data: response.hits.hits});
                }
        });
  

})



module.exports = route