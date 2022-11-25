const request = "request";


const fetchBreedDescription = (breedName, callback) => {
  request(
    `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`,
    (error, response, body) => {
      if (error) {
        callback(error , null);
        return;
      } else {
        const data = JSON.parse(body);
        if (data.length === 0) {
          callback("Breed not found", null);
          return;
        } else {
          callback(null, data[0].description);
        }
      }
    }
  );
};

const fetchMyIP = (callback) => {
  // use request to fetch IP address from JSON API

};

module.exports = { fetchMyIP };
