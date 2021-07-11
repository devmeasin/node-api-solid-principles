const Joi = require('joi');
const {defaultResponse , joiValidatorError} = require('../constants')

let validator = (data, schema) => {
    let result = schema.validate(data);

    if (result.error) {
        let errorDetails = result
            .error
            .details
            .map(value => {
                return {error: value.message, path: value.path}
            })
        return errorDetails;
    }
    return null;
}

module.exports.validateBodyData = (schema) => {
    return(req, res, next) => {
        let response = {...defaultResponse};
        let error = validator(req.body, schema);
        if (error) {
            response.message = joiValidatorError.message;
            response.body = error[0];
            return res.status(response.status).send(response);
        }
        return next();
    }
}