const { fetchMyIP, fetchCoordsByIP } = require("./iss");

fetchCoordsByIP("50.65.122.169", (err, data) => {
  if (err) {
    console.log(err);
  }
})