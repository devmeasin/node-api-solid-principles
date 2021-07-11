const mongoose = require('mongoose');
const dotENV = require('dotenv');
dotENV.config();

const DB_URL = process.env.DB_URL;

module.exports = async () => {
    try {
        await mongoose.connect(DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("DataBase Connected");
    } catch (err) {
        console.error(err.message);
    }
}