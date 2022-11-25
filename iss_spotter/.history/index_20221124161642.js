const { fetchMyIP, fetchCoordsByIP } = require("./iss");

fetchCoordsByIP(
 ( fetchMyIP((ip) => {
    return ip;
  })),
  (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(data);
  }
);
