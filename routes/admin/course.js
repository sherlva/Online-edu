const { Router } = require("express");
const router = Router();
const courses = require("../../controllers/admin/courses/index.js");

// courses get
router.get("/", courses.homeCourses);

//course post
router.get("/add", courses.getAddCourse);
router.post("/add", courses.add);

//course get one by id
// router.get("/:id", courses.getOneCourse);

//update by id
router.post("/update/:id", courses.updateCourse);
router.get("/update/:id", courses.getUpdateCourse);

// delete course by id
router.get('/delete/:id', courses.deleteCourse)

module.exports = router;
