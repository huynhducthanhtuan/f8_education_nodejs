const express = require("express");
const route = express.Router();
const siteController = require("../app/controllers/SiteController");

route.use("/search", siteController.search);
route.use("/blog", siteController.blog);
route.use("/", siteController.index);

module.exports = route;
