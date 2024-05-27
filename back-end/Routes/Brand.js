const express = require('express');
const brandRouter=express.Router()
const brandController=require('../Controller/CreateNewBrand')
brandRouter.post('/',brandController.createBrand)
brandRouter.get('/:id',brandController.getBrand)
brandRouter.get('/',brandController.getAllBrands)

module.exports=brandRouter;