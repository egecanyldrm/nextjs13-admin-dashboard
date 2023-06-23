const express = require('express');
const router = express.Router();

//Controller
const customerController = require('../controllers/customer')
//MiddleWare
const customerMiddleWare = require('../middleware/customer')

//Customer Home Page Process 
// router.get('/:customerName/:categoryid', customerMiddleWare, customerController.customerCategory)
router.post('/:customerName', customerMiddleWare, customerController.customerHomePage)

module.exports = router;