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

let productUpdateSchema = Joi.object().keys({
    name: Joi.string(),
    brand : Joi.string(),
    price : Joi.number()
});



module.exports = productSchema = {
    productCreateSchema,
    productQuerySchema,
    productUpdateSchema
}