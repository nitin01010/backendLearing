const mongoose = require("mongoose");

const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log(' dbConnect ');
    } catch (error) {
        console.log(' dbConnect faild ! ', error);
    }
}

dbConnect();

module.exports = dbConnect
