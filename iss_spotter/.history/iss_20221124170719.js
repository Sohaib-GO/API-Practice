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
    const final = data.toString();
    return final;
  });
};


const fetchCoordsByIP = (ip, callback) => {
  request(`http://ipwho.is/${ip}`, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching coordinates. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }

    const data = JSON.parse(body);
    const { latitude, longitude } = data;

    callback(null, {latitude, longitude});
  });
};

const fetchISSFlyOverTimes = (coord2, callback) => {
  request(`https://iss-flyover.herokuapp.com/json/?lat=${coord2.atitude}&lon=${coord2.longitude}`, (error, response, body) => {
if (error) {

}

});


};

module.exports = { fetchMyIP, fetchCoordsByIP };
