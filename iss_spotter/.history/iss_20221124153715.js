const request = require("request");

const fetchMyIP = (callback) => {
  request("https://api64.ipify.org/?format=json", (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }

    const data = JSON.parse(body).ip;
    callback(null, data);
  });
};

const fetchCoordsByIP = (ip, callback) => {
  request(


    
  )

};

module.exports = { fetchMyIP,fetchCoordsByIP };
