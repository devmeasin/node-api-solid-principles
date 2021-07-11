const router = require('express').Router();
const createProduct = require('../controller/productController');
const {productSchema} = require('../apiSchema/productSchema');
const {validateBodyData} = require('../middleware/joiSchemaValidation');

router.post('/',validateBodyData(productSchema), createProduct);


module.exports = router;