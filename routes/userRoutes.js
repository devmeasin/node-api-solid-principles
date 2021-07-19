const router = require('express').Router();
const {signUp} = require('../controller/userController');
const userSchema = require('../apiSchema/userSchema');
const {validateBodyData} = require('../middleware/joiSchemaValidation')


router.post('/signup',validateBodyData(userSchema.signUp),signUp);



module.exports = router;