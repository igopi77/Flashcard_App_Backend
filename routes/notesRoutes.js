const express = require("express");
const router = express.Router();

const {postNotes,getNotes} = require("../controllers/notesController");

router.route("/postNotes").post(postNotes)
router.route("/getNotes").get(getNotes);

module.exports = router;