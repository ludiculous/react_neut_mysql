const key = require("./config");
const ForexDataClient = require("forex-quotes");
let client = new ForexDataClient(key.forex);

module.exports = client