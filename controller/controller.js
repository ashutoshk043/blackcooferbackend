const records = require('../model/model')
const mongoose = require('mongoose')

const filteredData = async(req, res)=>{
    const alldata = await records.find({})
    res.send({status:true, message:alldata})
}

const getallfilterValues = async (req, res)=>{
    
    let filter={}
    const filetrsAre = req.body
    for(let i=0; i<filetrsAre.length; i++){
        filter[filetrsAre[i].filterkey] = filetrsAre[i].filtervalue
    }

    const filteredData = await records.find(filter)
    res.send({status:true, message:filteredData})
}


module.exports = {filteredData, getallfilterValues}