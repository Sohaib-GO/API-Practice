const request = require("request");



const fetchMyIP = (callback) => {
  request("https://api64.ipify.org/?format=json", (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    } else {
      console.log(body)
      const data = JSON.parse(body);
      console.log(data)
      callback(null, data.ip);
    }
  });
};

module.exports = { fetchMyIP };
