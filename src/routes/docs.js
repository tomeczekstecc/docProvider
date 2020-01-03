const express = require('express')
const router = express.Router()
const { getDocs, addDoc } = require('../controllers/docs')


router.route('/').get(getDocs).post(addDoc)






module.exports = router






