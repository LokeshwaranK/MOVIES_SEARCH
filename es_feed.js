const client = require("./connection.js");
const dataset = require("./movies.json");
const moviesList = [];

const makebulk = function (dataset, callback) {
  for (let current in dataset) {
    moviesList.push(
      {
        index: {
          _index: "imdbmovies",
          _type: "movies_search",
          _id: dataset[current].PANO,
        },
      },
      {
        imdb_title_id: dataset[current].imdb_title_id,
        title: dataset[current].title,
        original_title: dataset[current].original_title,
        year: dataset[current].year,
        date_published: dataset[current].date_published,
        genre: dataset[current].genre,
        duration: dataset[current].duration,
        country: dataset[current].country,
        language: dataset[current].language,
        director: dataset[current].director,
        writer: dataset[current].writer,
        production_company: dataset[current].production_company,
        actors: dataset[current].actors,
        description: dataset[current].description,
        avg_vote: dataset[current].avg_vote,
        votes: dataset[current].votes,
        budget: dataset[current].budget,
        usa_gross_income: dataset[current].usa_gross_income,
        worlwide_gross_income: dataset[current].worlwide_gross_income,
        metascore: dataset[current].metascore,
        reviews_from_users: dataset[current].reviews_from_users,
        reviews_from_critics: dataset[current].reviews_from_critics,
      }
    );
  }

  callback(moviesList);
};

const indexall = function (madebulk, callback) {
  client.bulk(
    {
      maxRetries: 5,
      index: "imdbmovies",
      type: "movies_search",
      body: madebulk,
    },
    function (err, resp, status) {
      if (err) {
        console.log(err);
      } else {
        callback(resp.items);
      }
    }
  );
};

makebulk(dataset, function (response) {
  console.log("Bulk content prepared");
  indexall(response, function (response) {
    console.log("feeded into elastic search");
  });
});
