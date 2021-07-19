const {defaultResponse , userMessage} = require('../constants');
const userService = require('../service/userService')

let signUp = async (req, res) => {

    let response = {...defaultResponse};
    try {
        let UserResponse = await userService.signUp(req.body);
        response.status = 200;
        response.message = userMessage.signUp;
        response.body = UserResponse;
    } catch (err) {
        response.message = `Error From ${err.message}`
    }

    return res.status(response.status).send(response);
    

}



module.exports = {
    signUp
}