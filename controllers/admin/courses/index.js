const Joi = require("joi");
const courses = require("../../../models/courses");
const Course = require("../../../models/courses");
const { getOnecategory } = require("../categories");

module.exports = {
  async homeCourses(req, res) {
    const courses = await Course.find();
    res.render("admin/courses", {
      title: "Courses page",
      layout: "../admin/layouts/main",
      courses,
    });
  },

  async add(req, res) {
    const error = validateCourses(req.body);

    if (!!error) {
      res.status(400).send(error.message);
    }

    const course = new Course({
      name: req.body.name,
      author: req.body.author,
      img: req.body.img,
    });

    await course.save();

    res.redirect("/api/course");
  },

  async getAddCourse(req, res) {
    res.render("admin/addCourse", {
      title: "Add course",
      layout: "../admin/layouts/main",
    });
  },

  // async getOneCourse(req, res) {
  //   try {
  //     const course = await Course.findById(req.params.id);
  //     res.render("admin/viewCourses", {
  //       title: course.name,
  //       course,
  //       layout: "../admin/layouts/main",
  //     });
  //   } catch (error) {
  //     console.log(error);
  //     res.send(error);
  //     return;
  //   }
  // },

  async updateCourse(req, res) {
    const error = validateCourses(req.body);

    if (!!error) {
      res.status(400).send(error.message);
    }

    try {
      const course = await Course.findByIdAndUpdate(req.params.id, req.body);
    } catch (error) {
      console.log(error);
      res.send(error);
      return;
    }

    res.redirect("/api/course");
  },

  async getUpdateCourse(req, res) {
    try {
      const course = await Course.findById(req.params.id);
      res.render("admin/updateCourses", {
        title: course.name,
        course,
        layout: "../admin/layouts/main",
      });
    } catch (error) {
      console.log(error);
      res.send(error);
      return;
    }
  },

  async deleteCourse(req, res) {
    try {
      await Course.findByIdAndDelete(req.params.id);
      res.redirect("/api/course/");
    } catch (error) {
      console.log(error);
      res.send(error);
      return;
    }
  },
};

function validateCourses(val) {
  const schema = Joi.object({
    name: Joi.string().required(),
    author: Joi.string(),
    img: Joi.string(),
  });

  const res = schema.validate(val);

  return res.error;
}
