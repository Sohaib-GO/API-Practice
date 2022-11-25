const { fetchMyIP, fetchCoordsByIP } = require("./iss");

fetchCoordsByIP('162.245.144.188', (error, coordinates) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned coordinates:' , coordinates);
});


  if (err) {
    console.log(err);
  }
  console.log(data);
});fetchCoordsByIP("50.65.122.169", (err, data) => {
