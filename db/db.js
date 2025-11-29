const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/votingDB", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log("MongoDB connected");
    } catch (error) {
        console.log("MongoDB connection failed");
        console.log(error);
        process.exit(1);
    }
};

module.exports = connectDB;
