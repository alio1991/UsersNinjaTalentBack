const express = require('express');
const getController = require('../controllers/user-controller');
const router = express.Router()
require('dotenv').config()



//ROUTER CRUD
router.put('/users/:id', getController.put);
router.delete('/users/:id', getController.delete);
router.get('/users/', getController.get);
router.post('/users/', getController.post);
router.get('/users/:id', getController.getOne);
router.get('/countries', getController.getCountries);


module.exports = router
