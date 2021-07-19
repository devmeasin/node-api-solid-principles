const bcrypt = require('bcrypt');
const User = require('../database/models/userModel');
const {userMessage} = require('../constants');
const {formatMongoData} = require('../helper/dbHelper')

let signUp = async ({email, password}) => {

    try {
        let user = await User.findOne({email});
        if (user) {
            throw new Error(userMessage.userExists);
        }
        password = await bcrypt.hash(password, 12);
        let createUser = new User({email, password});

        let result = await createUser.save();
        return formatMongoData(result);

    } catch (err) {
        console.log(`Something Wrong from userService : ${err.message}`);
        throw new Error(err);
    }

}

module.exports = {
    signUp
}