const express = require('express')
 const router = express.Router()
 const { createproduct } = require('../Controllar/productcontrolar')
 

 router.route("/Create-Product").post(createproduct)



 module.exports = router;