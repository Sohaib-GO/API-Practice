const request = require("request");



const fetchMyIP = (callback) => {
  request("https://api64.ipify.org/?format=json", (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    } else {
      const data = JSON.parse(body);
      callback(null, data.ip);
    }
  });
};

module.exports = { fetchMyIP };
