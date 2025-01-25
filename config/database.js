const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();


async function connectToDB() {

    try {
        await mongoose.connect(process.env.ATLAS_DB_URL);
    } catch(error) {
        console.log('Unable to connect to the DB server');
        console.log(error);
    }

}

module.exports = connectToDB;