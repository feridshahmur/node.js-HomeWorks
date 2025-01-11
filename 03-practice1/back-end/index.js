const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose');
const productRouter = require('./routes/index')
const app = express()
const port = 8080
 
app.use(cors())
app.use(express.json());
app.use("/practice1", productRouter);



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})




mongoose.connect('mongodb+srv://faridshahmur:faridshahmur@cluster0.j5uud.mongodb.net/')
  .then(() => console.log('Connected!'))
  .catch(()=>{console.log("some errors");
  })