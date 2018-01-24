var mongoose = require('mongoose');
const keys = require('../config/keys')

mongoose.Promise = global.Promise;
mongoose.connect( keys.MONGO_URI,  {
  useMongoClient: true})

module.exports = mongoose
