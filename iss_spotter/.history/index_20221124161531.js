const { fetchMyIP, fetchCoordsByIP } = require("./iss");

fetchCoordsByIP(
  fetchMyIP(( ip) => {
   
    console.log("It worked! Returned IP:", ip);
  }),
  (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(data);
  }
);
