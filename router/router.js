const express = require('express')
const router = express.Router()

const {filteredData, getallfilterValues} = require('../controller/controller')

router.get('/getallData', filteredData)
router.get('/getallfilterValues', getallfilterValues)

module.exports = router