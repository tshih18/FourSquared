/**
 * Config var for app
**/
module.exports = {
  mongoDBUrl: process.env.MONGODB_URL || process.env.MONGOLAB_URI  || 'mongodb://test:JjMRaJoyaJ}nxg6+A/63@ds153501.mlab.com:53501/emissary' || 'mongodb://localhost:27017/webstormtroopers',
  port: 3000,
  secret: process.env.SECRET || 'mysecret'
};
