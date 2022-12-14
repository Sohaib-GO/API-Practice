// const { nextISSTimesForMyLocation } = require("./iss");

// // fetchCoordsByIP('50.65.122.169', (error, coordinates) => {
// //   if (error) {
// //     console.log("It didn't work!" , error);
// //     return;
// //   }

// //   console.log('It worked! Returned coordinates:' , coordinates);
// // });

// // const exampleCoords = { latitude: 53.5412083, longitude: -113.2957365 };

// // fetchISSFlyOverTimes(exampleCoords, (error, passTimes) => {
// //   if (error) {
// //     console.log("It didn't work!" , error);
// //     return;
// //   }

// //   console.log('It worked! Returned flyover times:' , passTimes);
// // });

const printPassTimes =  (passTimes) => {
  for (const pass of passTimes) {
    const time = new Date(0);
    time.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${time} for ${duration} seconds!`);
  }
};

// nextISSTimesForMyLocation((error, passTimes) => {
//   if (error) {
//     return console.log("It didn't work!", error);
//   }
//   printPassTimes(passTimes);
// });


module.exports = {printPassTimes};