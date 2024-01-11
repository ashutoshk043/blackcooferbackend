const express = require('express')
const router = express.Router()

const {filteredData} = require('../controller/controller')

router.post('/filterdata', filteredData)

module.exports = router