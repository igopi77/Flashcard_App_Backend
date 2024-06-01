const mongoose = require("mongoose");

const dbConnection = async () => {
    mongoose.connect(process.env.MONGOO).then(() => {
        console.log("MongoDB successfully connected");
    }).catch( (e) => {
        console.log("Failure to Connect with mongoDb");
    });
};

module.exports = dbConnection;