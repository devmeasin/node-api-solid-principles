const productService = require('../service/productService');
const {defaultResponse, productCreated} = require('../constants');

module.exports = createProduct = async (req, res) => {
    let response = {
        ...defaultResponse
    }
    try {
        const productResponse = await productService.createProduct(req.body);
        response.status = 200;
        response.message = productCreated.message;
        response.body = productResponse;

    } catch (err) {
        response.message = `Error Form ${err.message}`;
    }
    return res
        .status(response.status)
        .send(response);

}