const express = require("express");
const {
    getAllData,
  
    getDataById,
    deleteDataById,
    postProduct,
    editProduct,
} = require("../controllers/index");

const router = express.Router();

router.get("/", getAllData);

router.get("/:id", getDataById);
router.delete("/:id", deleteDataById);
router.post("/", postProduct);
router.put("/:id", editProduct);

module.exports = router;