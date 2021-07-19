const router = require('express').Router();
const {createProduct , getAllProducts , getProductByID , productUpdate , productDelete} = require('../controller/productController');
const {productCreateSchema, productQuerySchema , productUpdateSchema} = require('../apiSchema/productSchema');
const {validateBodyData , validateQueryData} = require('../middleware/joiSchemaValidation');


router.delete('/:productID', productDelete)
router.put('/:productID',validateBodyData(productUpdateSchema), productUpdate);
router.get('/:productID', getProductByID);
router.get('/',validateQueryData(productQuerySchema), getAllProducts);
router.post('/',validateBodyData(productCreateSchema), createProduct);


module.exports = router;