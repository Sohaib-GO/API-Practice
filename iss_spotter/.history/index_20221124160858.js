const { fetchMyIP, fetchCoordsByIP } = require("./iss");


fetchCoordsByIP((fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned IP:' , ip);
})
),(err, data) => {
  if err {
    console.log(err)
  }
  e

})