const csvtojson = require("csvtojson");
const file = require("fs");

csvtojson()
  .fromFile("IMDb movies.csv")
  .then((movies) => {
    console.log(movies[0]);
    const data = JSON.stringify(movies, null, 4);
    file.writeFile("movies.json", data, (error) => {
      if (error) {
        console.log(error);
      } else {
        console.log("File Saved");
      }
    });
  })
  .catch((error) => {
    console.log(error);
  });
