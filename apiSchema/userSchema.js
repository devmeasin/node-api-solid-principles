const Joi = require('joi');


let signUp = Joi.object().keys({
    email : Joi.string().required(),
    password : Joi.string().required()
});



module.exports = userSchema = {
    signUp
}