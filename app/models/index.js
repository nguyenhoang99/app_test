const dbConfig = require("../config/db.config.js");
const tutorialFunction = require("./tutorial.model")
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.tutorials = tutorialFunction(mongoose);

module.exports = db;