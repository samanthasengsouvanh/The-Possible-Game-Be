
module.exports = {
  mongoURI: process.env.MONGODB_URI || "mongodb://localhost/possibleDB",
  secretOrKey: process.env.key
};

console.log("################# >>>>>>>>>>", process.env.MONGODB_URI)
