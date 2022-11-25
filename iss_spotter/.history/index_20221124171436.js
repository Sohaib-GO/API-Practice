const { fetchCoordsByIP, fetchISSFlyOverTimes } = require("./iss");

// fetchCoordsByIP('50.65.122.169', (error, coordinates) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned coordinates:' , coordinates);
// });

const exampleCoords = { latitude: '49.27670', longitude: '-123.13000' };

fetchISSFlyOverTimes(exampleCoords, (err, passTimes) => {
  if (err) {
    console.log(err);
  }
  console.log(passTimes);
});
