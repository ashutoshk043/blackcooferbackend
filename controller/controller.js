const records = require('../model/model')
const mongoose = require('mongoose')

const filteredData = async(req, res)=>{
    const alldata = await records.find({})
    res.send({status:true, message:alldata})
}

const getallfilterValues = async (req, res)=>{
    const findAllkeys = await records.findOne().select({_id:0})
    res.send({status:true, message:findAllkeys})
}


module.exports = {filteredData, getallfilterValues}