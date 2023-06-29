const express = require('express')
 const router = express.Router()
 const { createproduct, getproduct, deleteproduct, updateproduct, getsingleproduct } = require('../Controllar/productcontrolar')
 

 router.route("/Create-Product").post(createproduct)

 router.route("/Get-Product").get(getproduct) 

 router.route("/Get-Single-Product/:id").get(getsingleproduct)

 router.route("/Delete-Product/:id").delete(deleteproduct)

 router.route("/Update-Product/:id").put(updateproduct)



 module.exports = router;