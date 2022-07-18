const { Router } = require("express");
const router = Router();
const categories = require("../../controllers/admin/categories/index.js");

// Categories home page
router.get("/", categories.homeCategory);

// Add category form
router.get("/add", categories.getAddCategory);

// Add category
router.post("/add", categories.add);
// get category by id
router.get("/:id", categories.getOnecategory);
//update category
router.post("/update/:id", categories.updateById);
router.get("/update/:id", categories.getUpdate)
router.get("/delete/:id", categories.deleteCategory)

module.exports = router;
