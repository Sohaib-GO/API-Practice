const { fetchMyIP, fetchCoordsByIP } = require("./iss");

  if (err) {
    console.log(err);
  }
  console.log(data);
});fetchCoordsByIP("50.65.122.169", (err, data) => {
