const express = require('express')
const app = express()
const port = 8080
const mongoose = require('mongoose');
const cors = require('cors')
app.use(cors())

const {Schema} = mongoose

const librarySchema = new Schema({
    title: String, // String is shorthand for {type: String}
    author: String,
    genre : String,
    year : Number,
    available : Boolean,
    copies : Number,
    imageUrl : String
  });
  const KitabModel = mongoose.model('Kitab', librarySchema);


 // datalarin getirilmesi
app.get('/books', async (req, res) => {
//   res.send('Hello World!')
try {
    const books = await KitabModel.find()

   res.status(200).send(books)
       
} catch (error) {
    res.status(500).send({ message: error.message });
    
}

})

// products details

app.get('/books/:id', async (req, res) => {
    //   res.send('Hello World!')
    const {id} = req.params

    try {
        const books = await KitabModel.findById(id)
    
       res.status(200).send(books)
           
    } catch (error) {
        res.status(404).send({ message: error.message });
        
    }
    
})

 
// product delete

app.delete('/books/:id', async (req, res) => {
    //   res.send('Hello World!')
    const {id} = req.params

    try {
        const deletedBook = await KitabModel.findByIdAndDelete(id)
    
       res.status(200).send(deletedBook)
           
    } catch (error) {
        res.status(404).send({ message: error.message });
        
    }
    
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

mongoose.connect('mongodb+srv://faridshahmur:faridshahmur@cluster0.j5uud.mongodb.net/farid').then(()=>{
    console.log("connected");
    
});