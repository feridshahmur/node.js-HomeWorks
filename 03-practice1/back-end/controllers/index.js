const blogModel = require("../models/index")

const getAllData =  async (req, res) => {
    // res.send("Hello World!");
    try {
      const users = await blogModel.find({});
      res.status(200).send(users)
    } catch (error) {
      console.log(error);
    }
}

const getDataById = async (req, res) => {
    // res.send("Hello World!");
    const {id} = req.params
    try {
      const user = await blogModel.findById(id);
      res.status(200).send(user)
    } catch (error) {
      console.log(error);
    }
}

const deleteDataById = async (req, res) => {
    const { id } = req.params;
    try {
      const deletedProduct = await blogModel.findByIdAndDelete(id);
      if (!deletedProduct) {
        return res
          .status(404)
          .json({ message: "failed to delete! | product not found!" });
      }
      res.status(200).json({
        deletedProduct: deletedProduct,
        message: "deleted successfully!",
      });
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
}


const postProduct = async(req, res) => {
  // res.send('Hello World!')
  const { imageUrl, country, title, description } = req.body;
  
  if (!imageUrl || !country || !title || !description) {
    return res
      .status(400)
      .json({ message: "Bad Request! All fileds should be add!" });
  }
  try {
    const newProduct = blogModel({ ...req.body });
    await newProduct.save();
    res.status(201).json(
      newProduct
    );
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}


const editProduct = async (req, res) => { 
  const { id } = req.params;

  try {
    const updatedProduct = await blogModel.findByIdAndUpdate(
      id,
      {
        ...req.body,
      },
      {
        new: true,
      }
    );

    if (!updatedProduct) {
      return res.status(404).json({
        message: "product not found!",
      });
    }

    res.status(200).json({
      message: "updated successfully!",
      updatedProduct: updatedProduct,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllData,
  
  getDataById,
  deleteDataById,
  postProduct,
  editProduct,
};