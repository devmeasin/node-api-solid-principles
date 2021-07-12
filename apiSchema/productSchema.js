const Joi = require('joi');

let productCreateSchema = Joi.object().keys({
    name: Joi.string().required(),
    brand : Joi.string(),
    price : Joi.number().required()
});

let productQuerySchema = Joi.object().keys({
    skip: Joi.string(),
    limit : Joi.string()
});



module.exports = productSchema = {
    productCreateSchema,
    productQuerySchema
}