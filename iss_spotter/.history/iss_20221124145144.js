const { response } = require("express");

const request = "request";

const fetchBreedDescription = (breedName, callback) => {
  request(
    `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`,
    (error, response, body) => {
      if (error) {
        callback(error, null);
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
  request("https://api64.ipify.org/?format=json", (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }
    else {
      const data = JSON.parse(body);
      callback
    }
  }
  
  
  
  
  );
};

module.exports = { fetchMyIP };
