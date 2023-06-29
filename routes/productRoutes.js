const express = require('express')
 const router = express.Router()
 const { createproduct, getproduct, deleteproduct } = require('../Controllar/productcontrolar')
 

 router.route("/Create-Product").post(createproduct)

 router.route("/Get-Product").get(getproduct) 

 router.route("/Delete-Product/:id").delete(deleteproduct)



 module.exports = router;