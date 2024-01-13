const express = require('express')
const cors = require('cors')
const app = express()
const mongoose = require('mongoose')
const router = require('./router/router')
const port = 3000



app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



// mongodb connection
const url = "mongodb://127.0.0.1/blackcoofer";
 
try {
  mongoose.connect(url);
} catch (err) {
  console.error(err.message);
  process.exit(1);
}
const dbConnection = mongoose.connection;
dbConnection.once("open", (_) => {
  console.log(`Database connected: ${url}`);
});

dbConnection.on("error", (err) => {
  console.error(`connection error: ${err}`);
});

//mongocoonect ends here

app.use('/', router)

app.get('*', (req, res)=>{
    res.send({status:false, message:"Invalid API Path"})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})