const { fetchMyIP, fetchCoordsByIP } = require("./iss");

fetchCoordsByIP(
 () => fetchMyIP,
  (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(data);
  }
);
