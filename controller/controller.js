const records = require('../model/model')
const mongoose = require('mongoose')

const filteredData = async(req, res)=>{
    res.send({status:true, message:"connected..."})
}


module.exports = {filteredData}