const express = require('express')
const router = express.Router()

const {filteredData, getallfilterValues, } = require('../controller/controller')
router.get('/', (req, res)=>{
    res.send({"status":true, message:"API Connected..."})
})
router.get('/getallData', filteredData)
router.post('/getallfilterValues', getallfilterValues)

module.exports = router