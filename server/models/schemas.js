const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const lessonSchema = new Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  title: { type: String, required: true },
  type: { type: String },
  published: { type: Boolean },
  links: { type: Array },
  hidden: { type: Boolean },
  shortSummary: { type: String },
  keyPoints: { type: Array },
  takeaways: { type: Array },
  youtube: { type: String },
  prerequisite: { type: Array },
  hometask: { type: Array },
  notes: { type: Array },
  completed: { type: Boolean },
});

const userDataSchema = new Schema({
  completed: { type: Boolean },
  notes: { type: String },
});

const Lessons = mongoose.model("Lessons", lessonSchema, "lessons");
const UserData = mongoose.model("UserData", userDataSchema, "userData");

const siteSchemas = { Lessons: Lessons, UserData: UserData };

module.exports = siteSchemas;
