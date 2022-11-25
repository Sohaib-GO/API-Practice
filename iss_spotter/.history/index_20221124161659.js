const { fetchMyIP, fetchCoordsByIP } = require("./iss");

fetchCoordsByIP(
 () => fe,
  (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(data);
  }
);
