const request = require("request");
const arg = process.argv[2];

const fetchBreedDescription = (breedName, callback) => {
  request(
    `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`,
    (error, response, body) => {
      if (error) {
        callback(error);
        return;
      } else {
        const data = JSON.parse(body);
        if (data.length === 0) {
          callback("Breed not found");
          return;
        } else {
          console.log(data[0].description);
        }
      }
    }
  );
};

fetchBreedDescription(arg, (error) => {
  if (error) {
    console.log("Error fetch details:", error);
  }
});
