const express = require('express')
const router = express.Router()
const usersController = require('../controllers/usersController')


router.route('/') // CRUD
    .get(usersController.getAllUsers) // get response to the controller (read)
    .post(usersController.createNewUser) // create
    .patch(usersController.updateUser) // update
    .delete(usersController.deleteUser) // delete 


module.exports = router