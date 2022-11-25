const { fetchCoordsByIP, fetchISSFlyOverTimes } = require("./iss");

// fetchCoordsByIP('50.65.122.169', (error, coordinates) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned coordinates:' , coordinates);
// });

const exampleCoords = { latitude: 53.5412083, longitude: -113.2957365 };

fetchISSFlyOverTimes((exampleCoords), ());
