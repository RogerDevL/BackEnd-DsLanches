const {Router} = require('express');
const adminController = require('../controllers/adminController');
const router = Router();


router.delete('/:id', adminController.delete);