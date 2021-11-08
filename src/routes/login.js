const express = require("express");
const router = express.Router();
const loginController = require("../app/controllers/LoginController");

router.use("/:slup", loginController.show);
router.use("/", loginController.index);

module.exports = router;
