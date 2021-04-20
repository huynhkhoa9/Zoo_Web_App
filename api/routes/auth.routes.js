const { setRandomFallback } = require("bcryptjs");
const controller = require("../controllers/auth.controller");
const router = require("express").Router()

router.post("/api/auth/signin", controller.signin)
router.post("/", controller.signup)
router.post("/api/auth/employeesignin", controller.employeesignin)
router.post("/api/auth/addanimal", controller.addanimal)
router.post("/api/auth/addemployee", controller.addemployee)
router.post("/api/auth/addrevenue", controller.addrevenue)
router.post("/api/auth/getAnimals", controller.getAnimals)

module.exports = router;
