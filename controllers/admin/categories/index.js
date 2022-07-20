const Joi = require("joi");
const Category = require("../../../models/category");

module.exports = {
  async homeCategory(req, res) {
    const categories = await Category.find();
    res.render("admin/categories", {
      title: "Categories page",
      layout: "../admin/layouts/main",
      categories,
    });
  },

  async add(req, res) {
    const error = validateCategory(req.body);

    if (!!error) {
      res.status(400).send(error.message);
    }

    const category = new Category({
      name: req.body.name,
      img: req.body.img,
    });

    await category.save();

    res.redirect("/api/category");
  },

  async getAddCategory(req, res) {
    res.render("admin/addCategory", {
      title: "Add category",
      layout: "../admin/layouts/main",
    });
  },

  async getOnecategory(req, res) {
    try {
      const category = await Category.findById(req.params.id);
      res.render("admin/viewCategory", {
        title: category.name,
        category,
        layout: "../admin/layouts/main",
      });
    } catch (error) {
      console.log(error);
      res.send(error);
      return;
    }
  },

  async updateById(req, res) {
    const error = validateCategory(req.body);

    if (!!error) {
      res.status(400).send(error.message);
    }
    try {
      const category = await Category.findByIdAndUpdate(
        req.params.id,
        req.body
      );
    } catch (error) {
      console.log(error);
      res.send(error);
      return;
    }
    res.redirect("/api/category");
  },

  async getUpdate(req, res) {
    try {
      const category = await Category.findById(req.params.id);
      res.render("admin/updateCategory", {
        title: category.name,
        category,
        layout: "../admin/layouts/main",
      });
    } catch (error) {
      console.log(error);
      res.send(error);
      return;
    }
  },

  async deleteCategory(req, res) {
    try {
      await Category.findByIdAndDelete(req.params.id);
      res.redirect("/api/category/");
    } catch (error) {
      console.log(error);
      res.send(error);
      return;
    }
  },
};

function validateCategory(val) {
  const schema = Joi.object({
    name: Joi.string().required(),
    img: Joi.string(),
  });

  const res = schema.validate(val);

  return res.error;
}
