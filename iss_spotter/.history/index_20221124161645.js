const { fetchMyIP, fetchCoordsByIP } = require("./iss");

fetchCoordsByIP(
 (),
  (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(data);
  }
);
