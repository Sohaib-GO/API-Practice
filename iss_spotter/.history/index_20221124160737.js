const { fetchMyIP, fetchCoordsByIP } = require("./iss");


fetchCoordsByIP((fetchMyIP(ip)),(err, data)=> {})