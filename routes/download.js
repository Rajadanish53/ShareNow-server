const router = require("express").Router();
const File = require("../models/file");
const fs = require("fs");

router.get("/:uuid", async (req, res) => {
  // find the file in database first
  const file = await File.findOne({ uuid: req.params.uuid });
  if (!file) return res.render("download", { error: "Link has been expired" });
  const filePath = `${__dirname}/../${file.path}`;
  res.download(filePath);
});
module.exports = router;
