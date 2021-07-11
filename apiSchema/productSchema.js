const Joi = require('joi');

module.exports.productSchema = Joi.object().keys({
    name: Joi.string().required(),
    brand : Joi.string(),
    price : Joi.number().required()
})