const express = require('express');

//controller
const { signupUser, loginUser } = require('../controllers/userController')

const router = express.router();

//log in route
router.post('/login', loginUser)


//sign up route
router.post('/signup', signupUser)




module.exports = router;