const mongoose = require("mongoose")

const { Schema } = mongoose;

const blogSchema = new Schema({
  imageUrl : String,
  country : String,
  title: String, 
  
  description: String,
  
  
});


const blogModel = mongoose.model('Blog' , blogSchema)

module.exports = blogModel