require('dotenv').config();
module.exports = {
    mysecret: process.env.SECRETKEY,
    cryptoKey :process.env.HASHKEY,

  }